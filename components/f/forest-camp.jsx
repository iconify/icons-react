import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9dvr0bhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9dvr0bhq"/>`,
		"fallback": "game-icons:forest-camp",
	});
}

export default Component;
