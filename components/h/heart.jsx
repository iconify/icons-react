import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgj96cc_q.css';

const viewBox = {"width":710,"height":780};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgj96cc_q"/>`,
		"fallback": "il:heart",
	});
}

export default Component;
