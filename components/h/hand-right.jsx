import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_p34886l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_p34886l"/>`,
		"fallback": "ion:hand-right",
	});
}

export default Component;
