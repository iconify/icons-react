import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af9xaxben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af9xaxben"/>`,
		"fallback": "game-icons:healing",
	});
}

export default Component;
