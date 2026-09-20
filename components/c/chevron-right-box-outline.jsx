import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr5k80rzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr5k80rzb"/>`,
		"fallback": "mdi:chevron-right-box-outline",
	});
}

export default Component;
