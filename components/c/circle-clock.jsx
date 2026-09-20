import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b1r711bgn.css';
import '../../css/u/uh8psccjy.css';
import '../../css/f/ft8nxxddd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b1r711bgn"/><path class="uh8psccjy"/><path class="ft8nxxddd"/></g>`,
		"fallback": "streamline-plump:circle-clock",
	});
}

export default Component;
