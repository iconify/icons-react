import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npi5k6g5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npi5k6g5y"/>`,
		"fallback": "game-icons:abstract-079",
	});
}

export default Component;
