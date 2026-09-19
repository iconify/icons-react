import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp-4tryuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp-4tryuy"/>`,
		"fallback": "game-icons:empty-metal-bucket-handle",
	});
}

export default Component;
