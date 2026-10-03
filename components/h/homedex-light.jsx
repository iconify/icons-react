import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4x5sntfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4x5sntfr"/>`,
		"fallback": "selfhst:homedex-light",
	});
}

export default Component;
