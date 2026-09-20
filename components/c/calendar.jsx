import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvs79mmwk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvs79mmwk"/>`,
		"fallback": "oi:calendar",
	});
}

export default Component;
