import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgl83sa6b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgl83sa6b"/>`,
		"fallback": "teenyicons:fingerprint-outline",
	});
}

export default Component;
