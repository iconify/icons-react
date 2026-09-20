import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfv2d1nvr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfv2d1nvr"/>`,
		"fallback": "map:general-contractor",
	});
}

export default Component;
