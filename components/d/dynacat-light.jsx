import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbu9dvbnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbu9dvbnf"/>`,
		"fallback": "selfhst:dynacat-light",
	});
}

export default Component;
