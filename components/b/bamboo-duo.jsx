import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7v63ebic.css';
import '../../css/r/re7s1mb8b.css';
import '../../css/x/xfnzpgbvh.css';
import '../../css/p/pandr5r4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a7v63ebic"/><path class="re7s1mb8b"/><path class="xfnzpgbvh"/><path class="pandr5r4z"/></g>`,
		"fallback": "withicons:bamboo-duo",
	});
}

export default Component;
