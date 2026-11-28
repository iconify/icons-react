import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg7s1p4af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg7s1p4af"/>`,
		"fallback": "noviair-light:fridge",
	});
}

export default Component;
