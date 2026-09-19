import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub1ttxb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub1ttxb2n"/>`,
		"fallback": "hugeicons:body-part-six-pack",
	});
}

export default Component;
