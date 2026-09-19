import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2v73ib3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2v73ib3u"/>`,
		"fallback": "game-icons:hexes",
	});
}

export default Component;
