import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0wqr5p5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0wqr5p5t"/>`,
		"fallback": "selfhst:haus-light",
	});
}

export default Component;
