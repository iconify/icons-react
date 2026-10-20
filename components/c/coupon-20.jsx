import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl41xxbat.css';
import '../../css/a/a8eh2dnic.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl41xxbat"/><path class="a8eh2dnic"/>`,
		"fallback": "energy-icons:coupon-20",
	});
}

export default Component;
