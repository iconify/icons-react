import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wae83hbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wae83hbfl"/>`,
		"fallback": "solar:flag-2-linear",
	});
}

export default Component;
