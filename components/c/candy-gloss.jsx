import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl-s0jbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl-s0jbvp"/>`,
		"fallback": "withicons:candy-gloss",
	});
}

export default Component;
