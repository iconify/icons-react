import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6bfz_jhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6bfz_jhh"/>`,
		"fallback": "bx:bxs-vector",
	});
}

export default Component;
