import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tap41xb_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tap41xb_i"/>`,
		"fallback": "game-icons:heart-inside",
	});
}

export default Component;
