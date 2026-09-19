import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scoj68s8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scoj68s8m"/>`,
		"fallback": "game-icons:coliseum",
	});
}

export default Component;
