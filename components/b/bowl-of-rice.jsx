import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpk0dxbrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpk0dxbrm"/>`,
		"fallback": "game-icons:bowl-of-rice",
	});
}

export default Component;
