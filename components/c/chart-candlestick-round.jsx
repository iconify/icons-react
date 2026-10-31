import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_i7jf3cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_i7jf3cu"/>`,
		"fallback": "coolicons:chart-candlestick-round",
	});
}

export default Component;
