import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm2a88b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm2a88b_p"/>`,
		"fallback": "bx:bxs-layout",
	});
}

export default Component;
