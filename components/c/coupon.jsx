import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us5tv89ee.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us5tv89ee"/>`,
		"fallback": "whh:coupon",
	});
}

export default Component;
