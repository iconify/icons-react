import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv059fbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv059fbgd"/>`,
		"fallback": "eva:arrow-circle-down-fill",
	});
}

export default Component;
