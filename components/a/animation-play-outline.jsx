import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uevab_bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uevab_bgd"/>`,
		"fallback": "mdi:animation-play-outline",
	});
}

export default Component;
