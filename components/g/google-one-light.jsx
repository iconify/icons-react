import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj2hjiqls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj2hjiqls"/>`,
		"fallback": "selfhst:google-one-light",
	});
}

export default Component;
