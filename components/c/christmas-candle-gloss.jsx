import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltp05wb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltp05wb4l"/>`,
		"fallback": "withicons:christmas-candle-gloss",
	});
}

export default Component;
