import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-10o11k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-10o11k"/>`,
		"fallback": "game-icons:ceremonial-mask",
	});
}

export default Component;
