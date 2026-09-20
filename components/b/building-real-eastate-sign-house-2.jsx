import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsv-5w5ym.css';
import '../../css/v/vfhoccbdf.css';
import '../../css/v/vwz4-ew1u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsv-5w5ym"/><path class="vfhoccbdf"/><path class="vwz4-ew1u"/>`,
		"fallback": "streamline-pixel:building-real-eastate-sign-house-2",
	});
}

export default Component;
