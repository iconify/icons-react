import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wibl5e4hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wibl5e4hz"/>`,
		"fallback": "cbi:desk-lamp",
	});
}

export default Component;
