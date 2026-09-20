import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7b_59b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7b_59b2l"/>`,
		"fallback": "proicons:corner-radius",
	});
}

export default Component;
