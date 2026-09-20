import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izf1qcc1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izf1qcc1f"/>`,
		"fallback": "mdi:folder-star-multiple",
	});
}

export default Component;
