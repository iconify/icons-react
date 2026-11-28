import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgo93hedx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgo93hedx"/>`,
		"fallback": "noviair-light:frog",
	});
}

export default Component;
