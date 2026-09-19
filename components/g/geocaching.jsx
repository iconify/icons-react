import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa4eobcfr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa4eobcfr"/>`,
		"fallback": "cib:geocaching",
	});
}

export default Component;
