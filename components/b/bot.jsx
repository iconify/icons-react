import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxt184b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxt184b_m"/>`,
		"fallback": "bxs:bot",
	});
}

export default Component;
