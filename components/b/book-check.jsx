import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdwzq1_al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdwzq1_al"/>`,
		"fallback": "noviair-light:book-check",
	});
}

export default Component;
