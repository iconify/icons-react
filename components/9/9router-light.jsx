import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u05l21b4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u05l21b4z"/>`,
		"fallback": "selfhst:9router-light",
	});
}

export default Component;
