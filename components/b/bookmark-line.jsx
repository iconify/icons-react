import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07581b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p07581b0j"/>`,
		"fallback": "ri:bookmark-line",
	});
}

export default Component;
