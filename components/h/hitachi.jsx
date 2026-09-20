import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqxj48b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqxj48b_m"/>`,
		"fallback": "thesvg-color:hitachi",
	});
}

export default Component;
