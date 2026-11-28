import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n93ek8b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n93ek8b_t"/>`,
		"fallback": "noviair-light:function",
	});
}

export default Component;
