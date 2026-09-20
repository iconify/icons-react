import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7tep0bmk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7tep0bmk"/>`,
		"fallback": "la:angellist",
	});
}

export default Component;
