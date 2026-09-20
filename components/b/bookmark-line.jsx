import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niuy0cbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niuy0cbva"/>`,
		"fallback": "majesticons:bookmark-line",
	});
}

export default Component;
