import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yefe715tw.css';
import '../../css/q/qpzpo_b1f.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t08z06bxh.css';
import '../../css/h/ho69mj0-w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="yefe715tw"/><path class="qpzpo_b1f"/><g class="x8poo_bjf"><ellipse class="t08z06bxh"/><path class="ho69mj0-w"/></g>`,
		"fallback": "openmoji:hole",
	});
}

export default Component;
