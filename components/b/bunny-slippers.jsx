import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiucd_uxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiucd_uxx"/>`,
		"fallback": "game-icons:bunny-slippers",
	});
}

export default Component;
