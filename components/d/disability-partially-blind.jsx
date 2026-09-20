import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z_vk08bfm.css';
import '../../css/j/jx05nhb6j.css';
import '../../css/m/m-i-p4irg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z_vk08bfm"/><path class="jx05nhb6j"/><path class="m-i-p4irg"/></g>`,
		"fallback": "streamline-freehand-color:disability-partially-blind",
	});
}

export default Component;
