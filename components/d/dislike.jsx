import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mie05o1hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mie05o1hb"/>`,
		"fallback": "bxs:dislike",
	});
}

export default Component;
