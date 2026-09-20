import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1u1o_u1j.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1u1o_u1j"/>`,
		"fallback": "jam:brush",
	});
}

export default Component;
