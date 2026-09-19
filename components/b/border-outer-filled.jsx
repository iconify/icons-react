import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5pd5bcbi.css';
import '../../css/q/q33pllwot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5pd5bcbi"/><path class="q33pllwot"/>`,
		"fallback": "boxicons:border-outer-filled",
	});
}

export default Component;
