import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfwub9bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfwub9bap"/>`,
		"fallback": "mage:home-heart-fill",
	});
}

export default Component;
