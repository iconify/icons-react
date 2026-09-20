import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/svw4_lb5n.css';
import '../../css/n/n6kdhccvk.css';
import '../../css/o/o4he8kb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="svw4_lb5n"/><path class="n6kdhccvk"/><path class="o4he8kb_o"/></g>`,
		"fallback": "solar:folder-open-linear",
	});
}

export default Component;
