import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qg_6aob3t.css';
import '../../css/v/vl4tdxbnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qg_6aob3t"/><path class="vl4tdxbnj"/></g>`,
		"fallback": "heroicons-solid:external-link",
	});
}

export default Component;
