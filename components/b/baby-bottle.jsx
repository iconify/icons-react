import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avo0fx4sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avo0fx4sb"/>`,
		"fallback": "mdi:baby-bottle",
	});
}

export default Component;
