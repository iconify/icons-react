import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuy7yly5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuy7yly5t"/>`,
		"fallback": "game-icons:incoming-rocket",
	});
}

export default Component;
