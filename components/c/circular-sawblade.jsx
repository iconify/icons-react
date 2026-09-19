import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjku5iuiy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjku5iuiy"/>`,
		"fallback": "game-icons:circular-sawblade",
	});
}

export default Component;
