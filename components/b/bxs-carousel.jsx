import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnirrg5bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnirrg5bb"/>`,
		"fallback": "bx:bxs-carousel",
	});
}

export default Component;
