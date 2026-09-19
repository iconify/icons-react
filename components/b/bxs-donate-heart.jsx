import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2w7l9b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2w7l9b_g"/>`,
		"fallback": "bx:bxs-donate-heart",
	});
}

export default Component;
