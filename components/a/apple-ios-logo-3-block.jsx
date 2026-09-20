import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_z-ilrca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_z-ilrca"/>`,
		"fallback": "streamline-logos:apple-ios-logo-3-block",
	});
}

export default Component;
