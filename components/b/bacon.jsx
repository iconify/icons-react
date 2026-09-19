import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b735kbgvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b735kbgvp"/>`,
		"fallback": "circum:bacon",
	});
}

export default Component;
