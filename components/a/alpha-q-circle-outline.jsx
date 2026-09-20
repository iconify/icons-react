import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1p332b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1p332b2v"/>`,
		"fallback": "mdi:alpha-q-circle-outline",
	});
}

export default Component;
