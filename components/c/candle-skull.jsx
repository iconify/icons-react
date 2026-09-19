import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brr5v30ic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brr5v30ic"/>`,
		"fallback": "game-icons:candle-skull",
	});
}

export default Component;
