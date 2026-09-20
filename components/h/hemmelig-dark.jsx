import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ht4lbqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ht4lbqe"/>`,
		"fallback": "selfhst:hemmelig-dark",
	});
}

export default Component;
