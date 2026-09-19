import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb3dnfb0c.css';
import '../../css/g/gsllvxbkr.css';
import '../../css/k/k09zifbmd.css';
import '../../css/x/x7axkclvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb3dnfb0c"/><g class="gsllvxbkr"><path class="k09zifbmd"/><path class="x7axkclvw"/></g>`,
		"fallback": "flat-color-icons:bearish",
	});
}

export default Component;
