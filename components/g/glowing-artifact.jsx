import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slvt69m3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slvt69m3k"/>`,
		"fallback": "game-icons:glowing-artifact",
	});
}

export default Component;
