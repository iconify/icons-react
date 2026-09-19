import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0u060rxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0u060rxc"/>`,
		"fallback": "fxemoji:blackmediumsmallsquare",
	});
}

export default Component;
