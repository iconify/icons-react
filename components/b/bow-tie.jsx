import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5hvg5b5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5hvg5b5u"/>`,
		"fallback": "game-icons:bow-tie",
	});
}

export default Component;
