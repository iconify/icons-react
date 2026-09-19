import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcc333z4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcc333z4c"/>`,
		"fallback": "hugeicons:cloud",
	});
}

export default Component;
