import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp1z_cgza.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp1z_cgza"/>`,
		"fallback": "fa-regular:calendar-alt",
	});
}

export default Component;
