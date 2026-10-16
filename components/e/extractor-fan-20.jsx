import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo53krbdf.css';
import '../../css/e/e6f6u_3ws.css';
import '../../css/h/h-g0e0bjc.css';
import '../../css/u/uz1sdemxy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo53krbdf"/><path class="e6f6u_3ws"/><path class="h-g0e0bjc"/><path class="uz1sdemxy"/>`,
		"fallback": "energy-icons:extractor-fan-20",
	});
}

export default Component;
