import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygs-idd4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygs-idd4h"/>`,
		"fallback": "game-icons:candles",
	});
}

export default Component;
