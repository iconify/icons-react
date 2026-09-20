import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w48k0s7hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w48k0s7hl"/>`,
		"fallback": "lucide-lab:candlestick-big",
	});
}

export default Component;
