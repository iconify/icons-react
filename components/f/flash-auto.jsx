import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6jsscczo.css';

const viewBox = {"width":416,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6jsscczo"/>`,
		"fallback": "zmdi:flash-auto",
	});
}

export default Component;
