import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztznpdrki.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztznpdrki"/>`,
		"fallback": "game-icons:abstract-045",
	});
}

export default Component;
