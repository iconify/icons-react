import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf_6m0xwb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf_6m0xwb"/>`,
		"fallback": "ion:code",
	});
}

export default Component;
