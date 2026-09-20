import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rppx1zbps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rppx1zbps"/>`,
		"fallback": "selfhst:1password-dark",
	});
}

export default Component;
