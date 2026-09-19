import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otd0h-0ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otd0h-0ue"/>`,
		"fallback": "bx:bxl-snapchat",
	});
}

export default Component;
