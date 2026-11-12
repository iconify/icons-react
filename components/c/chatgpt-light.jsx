import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9q0aubhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9q0aubhk"/>`,
		"fallback": "selfhst:chatgpt-light",
	});
}

export default Component;
