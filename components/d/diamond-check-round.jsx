import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybf8n6b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybf8n6b7b"/>`,
		"fallback": "coolicons:diamond-check-round",
	});
}

export default Component;
