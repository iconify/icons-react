import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtq45wijf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtq45wijf"/>`,
		"fallback": "selfhst:growchief-dark",
	});
}

export default Component;
