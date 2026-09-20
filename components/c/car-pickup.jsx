import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehln14cwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehln14cwb"/>`,
		"fallback": "mdi:car-pickup",
	});
}

export default Component;
