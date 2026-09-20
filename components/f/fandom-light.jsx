import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eekg15-bx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eekg15-bx"/>`,
		"fallback": "selfhst:fandom-light",
	});
}

export default Component;
