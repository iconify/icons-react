import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrq3bhfat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrq3bhfat"/>`,
		"fallback": "mynaui:brand-twitter",
	});
}

export default Component;
