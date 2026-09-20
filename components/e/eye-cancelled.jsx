import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehqakfbkq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehqakfbkq"/>`,
		"fallback": "ix:eye-cancelled",
	});
}

export default Component;
