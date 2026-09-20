import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwucx9qju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwucx9qju"/>`,
		"fallback": "selfhst:aureus-light",
	});
}

export default Component;
