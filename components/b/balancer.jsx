import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2d7-nlvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2d7-nlvr"/>`,
		"fallback": "token:balancer",
	});
}

export default Component;
