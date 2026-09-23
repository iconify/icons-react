import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv4dbmbfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv4dbmbfr"/>`,
		"fallback": "selfhst:crowbarr",
	});
}

export default Component;
