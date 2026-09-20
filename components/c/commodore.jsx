import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqw4w29bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqw4w29bz"/>`,
		"fallback": "simple-icons:commodore",
	});
}

export default Component;
