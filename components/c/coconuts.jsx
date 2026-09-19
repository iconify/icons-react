import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy-n0abja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy-n0abja"/>`,
		"fallback": "game-icons:coconuts",
	});
}

export default Component;
