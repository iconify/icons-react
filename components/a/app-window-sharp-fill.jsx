import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4i-ijb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4i-ijb_j"/>`,
		"fallback": "keyline-icons:app-window-sharp-fill",
	});
}

export default Component;
