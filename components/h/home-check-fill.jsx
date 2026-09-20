import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw8shqb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw8shqb8h"/>`,
		"fallback": "mage:home-check-fill",
	});
}

export default Component;
