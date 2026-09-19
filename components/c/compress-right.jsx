import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy3tuvb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy3tuvb_b"/>`,
		"fallback": "gg:compress-right",
	});
}

export default Component;
