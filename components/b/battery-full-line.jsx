import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fll4_tu9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fll4_tu9k"/>`,
		"fallback": "majesticons:battery-full-line",
	});
}

export default Component;
