import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1e1tuxsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1e1tuxsz"/>`,
		"fallback": "withicons:chart-candlestick-gloss",
	});
}

export default Component;
