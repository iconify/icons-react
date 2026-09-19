import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyt-gdcty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyt-gdcty"/>`,
		"fallback": "game-icons:dripping-knife",
	});
}

export default Component;
