import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocurxub7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocurxub7k"/>`,
		"fallback": "ri:flip-horizontal-2-fill",
	});
}

export default Component;
