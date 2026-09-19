import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd1xznpkt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd1xznpkt"/>`,
		"fallback": "bi:gear-fill",
	});
}

export default Component;
