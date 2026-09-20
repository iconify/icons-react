import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttb5vlbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttb5vlbvn"/>`,
		"fallback": "mdi:food-takeout-box",
	});
}

export default Component;
