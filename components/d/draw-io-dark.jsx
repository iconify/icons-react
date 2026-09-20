import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_xmmxlj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_xmmxlj"/>`,
		"fallback": "selfhst:draw-io-dark",
	});
}

export default Component;
