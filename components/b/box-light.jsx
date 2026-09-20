import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe46s0bzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe46s0bzg"/>`,
		"fallback": "selfhst:box-light",
	});
}

export default Component;
