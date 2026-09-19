import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drm9wrbrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drm9wrbrb"/>`,
		"fallback": "game-icons:gavel",
	});
}

export default Component;
