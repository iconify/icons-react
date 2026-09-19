import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xto9lgpmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xto9lgpmg"/>`,
		"fallback": "eva:bell-outline",
	});
}

export default Component;
