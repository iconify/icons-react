import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x17zgkbom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x17zgkbom"/>`,
		"fallback": "game-icons:candle-holder",
	});
}

export default Component;
