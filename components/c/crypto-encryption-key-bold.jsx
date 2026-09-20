import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oez_tozby.css';
import '../../css/y/y80r9ybqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oez_tozby"/><path class="y80r9ybqi"/>`,
		"fallback": "streamline-ultimate:crypto-encryption-key-bold",
	});
}

export default Component;
