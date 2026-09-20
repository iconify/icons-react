import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whbq-6bkt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whbq-6bkt"/>`,
		"fallback": "pinhead:die-face-with-two-pips",
	});
}

export default Component;
