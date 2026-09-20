import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn8-qiy_o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn8-qiy_o"/>`,
		"fallback": "streamline-pixel:business-product-startup-1",
	});
}

export default Component;
