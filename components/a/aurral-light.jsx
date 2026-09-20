import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6g-z658n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6g-z658n"/>`,
		"fallback": "selfhst:aurral-light",
	});
}

export default Component;
