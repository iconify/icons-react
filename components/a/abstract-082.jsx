import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a85az3b7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a85az3b7a"/>`,
		"fallback": "game-icons:abstract-082",
	});
}

export default Component;
