import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-cto4hid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-cto4hid"/>`,
		"fallback": "noviair-light:frying-pan-clock",
	});
}

export default Component;
