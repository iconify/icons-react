import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur_4-tsif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur_4-tsif"/>`,
		"fallback": "game-icons:dice-shield",
	});
}

export default Component;
