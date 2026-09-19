import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_uzs2cum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_uzs2cum"/>`,
		"fallback": "iconoir:2x2-cell",
	});
}

export default Component;
