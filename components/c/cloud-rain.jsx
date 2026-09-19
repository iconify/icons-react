import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2h3c5b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2h3c5b8v"/>`,
		"fallback": "hugeicons:cloud-rain",
	});
}

export default Component;
