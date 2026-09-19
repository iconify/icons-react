import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw3w1xvfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw3w1xvfl"/>`,
		"fallback": "bx:bxs-tag-x",
	});
}

export default Component;
