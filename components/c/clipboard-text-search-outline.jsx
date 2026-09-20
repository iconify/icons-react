import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8n05qlvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8n05qlvi"/>`,
		"fallback": "mdi:clipboard-text-search-outline",
	});
}

export default Component;
