import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6l094dd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6l094dd"/>`,
		"fallback": "game-icons:abstract-002",
	});
}

export default Component;
