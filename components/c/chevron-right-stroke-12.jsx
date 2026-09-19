import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km7b5sb_x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km7b5sb_x"/>`,
		"fallback": "garden:chevron-right-stroke-12",
	});
}

export default Component;
