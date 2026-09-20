import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0yul3-vt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0yul3-vt"/>`,
		"fallback": "selfhst:capital-one",
	});
}

export default Component;
