import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ta-b9kowj.css';
import '../../css/y/y6m4-subp.css';
import '../../css/l/ltxc5lndl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ta-b9kowj"/><path class="y6m4-subp"/><path class="ltxc5lndl"/></g>`,
		"fallback": "iconaut:antenna",
	});
}

export default Component;
