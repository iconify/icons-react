import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy6bk_bsb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy6bk_bsb"/>`,
		"fallback": "garden:calendar-fill-12",
	});
}

export default Component;
