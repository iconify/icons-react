import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh3nr0brd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh3nr0brd"/>`,
		"fallback": "selfhst:fluidd-dark",
	});
}

export default Component;
