import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foexnebhq.css';
import '../../css/e/e_7r0xb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foexnebhq"/><path class="e_7r0xb_r"/>`,
		"fallback": "bxs:car-garage",
	});
}

export default Component;
