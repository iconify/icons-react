import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-k-ldbym.css';
import '../../css/f/f_-6zw7bb.css';
import '../../css/r/rq7mwwplu.css';
import '../../css/o/o9nmwxh-q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-k-ldbym"/><path class="f_-6zw7bb"/><path class="rq7mwwplu"/><path class="o9nmwxh-q"/></g>`,
		"fallback": "streamline-color:dhammajak",
	});
}

export default Component;
