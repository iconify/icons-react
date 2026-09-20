import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq8rsvbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq8rsvbxp"/>`,
		"fallback": "si:ai-phone-alt-1-fill",
	});
}

export default Component;
