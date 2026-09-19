import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nepukpmhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nepukpmhu"/>`,
		"fallback": "game-icons:abstract-112",
	});
}

export default Component;
