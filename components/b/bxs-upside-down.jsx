import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwlm1_b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwlm1_b0f"/>`,
		"fallback": "bx:bxs-upside-down",
	});
}

export default Component;
