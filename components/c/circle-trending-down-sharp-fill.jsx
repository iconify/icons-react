import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhra1rbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhra1rbiz"/>`,
		"fallback": "keyline-icons:circle-trending-down-sharp-fill",
	});
}

export default Component;
