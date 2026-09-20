import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3vic4b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3vic4b4a"/>`,
		"fallback": "mage:fire-a-fill",
	});
}

export default Component;
