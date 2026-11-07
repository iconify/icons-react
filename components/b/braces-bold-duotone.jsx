import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfhi03nez.css';
import '../../css/j/jy4wz_42m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfhi03nez"/><path class="jy4wz_42m"/>`,
		"fallback": "solar:braces-bold-duotone",
	});
}

export default Component;
