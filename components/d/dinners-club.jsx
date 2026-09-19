import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri5yisb4w.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri5yisb4w"/>`,
		"fallback": "fontisto:dinners-club",
	});
}

export default Component;
