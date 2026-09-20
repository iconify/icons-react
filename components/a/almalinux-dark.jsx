import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3x_g1b_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3x_g1b_y"/>`,
		"fallback": "selfhst:almalinux-dark",
	});
}

export default Component;
