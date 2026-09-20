import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxab3-b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxab3-b7b"/>`,
		"fallback": "sidekickicons:bars-3-bottom-center-solid",
	});
}

export default Component;
