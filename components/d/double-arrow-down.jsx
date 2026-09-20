import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inw8n8b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inw8n8b8u"/>`,
		"fallback": "mage:double-arrow-down",
	});
}

export default Component;
