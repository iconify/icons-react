import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opo08-b2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opo08-b2k"/>`,
		"fallback": "selfhst:dumb-genius",
	});
}

export default Component;
