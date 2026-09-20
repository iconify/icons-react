import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd5g40bff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd5g40bff"/>`,
		"fallback": "selfhst:diskover-dark",
	});
}

export default Component;
