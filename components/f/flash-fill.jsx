import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlb_45vzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlb_45vzo"/>`,
		"fallback": "eva:flash-fill",
	});
}

export default Component;
