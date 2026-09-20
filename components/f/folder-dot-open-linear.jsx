import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/svw4_lb5n.css';
import '../../css/o/o4he8kb_o.css';
import '../../css/z/zn-yurbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="svw4_lb5n"/><path class="o4he8kb_o"/><path class="zn-yurbog"/></g>`,
		"fallback": "solar:folder-dot-open-linear",
	});
}

export default Component;
