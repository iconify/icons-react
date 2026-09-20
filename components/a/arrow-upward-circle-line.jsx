import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii897cc6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii897cc6y"/>`,
		"fallback": "si:arrow-upward-circle-line",
	});
}

export default Component;
