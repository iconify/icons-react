import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyv7r-wuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyv7r-wuq"/>`,
		"fallback": "mingcute:dna-line",
	});
}

export default Component;
