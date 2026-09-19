import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg8l3b1wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg8l3b1wc"/>`,
		"fallback": "iconoir:golf",
	});
}

export default Component;
