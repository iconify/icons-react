import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crkz45p_z.css';
import '../../css/o/o2to2iddk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="crkz45p_z"/><path class="o2to2iddk"/></g>`,
		"fallback": "coolicons:fingerprint-bulk-round",
	});
}

export default Component;
