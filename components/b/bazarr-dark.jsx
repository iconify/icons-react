import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i92akobfb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i92akobfb"/>`,
		"fallback": "selfhst:bazarr-dark",
	});
}

export default Component;
