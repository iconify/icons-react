import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucfl82bbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucfl82bbg"/>`,
		"fallback": "selfhst:ech0-dark",
	});
}

export default Component;
