import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug81a-hsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug81a-hsu"/>`,
		"fallback": "griddy-icons:currency-rupee",
	});
}

export default Component;
