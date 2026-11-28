import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-wla-2_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-wla-2_t"/>`,
		"fallback": "noviair-light:bow-tie",
	});
}

export default Component;
