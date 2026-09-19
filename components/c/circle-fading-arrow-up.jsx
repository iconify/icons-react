import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjbsh1btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjbsh1btt"/>`,
		"fallback": "hugeicons:circle-fading-arrow-up",
	});
}

export default Component;
