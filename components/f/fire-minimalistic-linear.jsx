import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e13-6lb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e13-6lb2b"/>`,
		"fallback": "solar:fire-minimalistic-linear",
	});
}

export default Component;
