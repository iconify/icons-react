import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cay1xibmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cay1xibmd"/>`,
		"fallback": "game-icons:candle-light",
	});
}

export default Component;
