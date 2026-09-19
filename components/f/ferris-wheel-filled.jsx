import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v44perkgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v44perkgg"/>`,
		"fallback": "griddy-icons:ferris-wheel-filled",
	});
}

export default Component;
