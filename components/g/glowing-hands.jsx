import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy8-t-bnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy8-t-bnl"/>`,
		"fallback": "game-icons:glowing-hands",
	});
}

export default Component;
