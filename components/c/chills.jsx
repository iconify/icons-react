import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/falrj6b-v.css';
import '../../css/m/m7fafxb8d.css';
import '../../css/d/dxfu67mcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="falrj6b-v"/><path class="m7fafxb8d"/><path clip-rule="evenodd" class="dxfu67mcg"/></g>`,
		"fallback": "healthicons:chills",
	});
}

export default Component;
