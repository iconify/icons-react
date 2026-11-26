import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmljcx80c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmljcx80c"/>`,
		"fallback": "thesvg-color:glinr-light",
	});
}

export default Component;
