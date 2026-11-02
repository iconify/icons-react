import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpngxw3vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpngxw3vl"/>`,
		"fallback": "mingcute:circle-arrow-out-up-left-line",
	});
}

export default Component;
