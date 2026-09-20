import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tad4r14dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tad4r14dc"/>`,
		"fallback": "mdi-light:hamburger",
	});
}

export default Component;
