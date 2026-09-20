import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xs--b7q-p.css';
import '../../css/i/ic4_u_bgh.css';
import '../../css/z/ze0w8b34v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xs--b7q-p"/><path class="ic4_u_bgh"/><path class="ze0w8b34v"/></g>`,
		"fallback": "mage:box-upload",
	});
}

export default Component;
