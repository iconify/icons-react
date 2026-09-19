import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6j2i1bzb.css';
import '../../css/n/nwa55i2nd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6j2i1bzb"/><path class="nwa55i2nd"/>`,
		"fallback": "devicon:aframe",
	});
}

export default Component;
