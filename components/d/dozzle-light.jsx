import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wysvl9k5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wysvl9k5p"/>`,
		"fallback": "selfhst:dozzle-light",
	});
}

export default Component;
