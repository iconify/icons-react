import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kca4iibme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kca4iibme"/>`,
		"fallback": "iconaut:arrow-big-left-solid",
	});
}

export default Component;
