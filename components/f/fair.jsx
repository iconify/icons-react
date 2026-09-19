import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bbp8jrcad.css';
import '../../css/f/faa_66b6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="bbp8jrcad"/><path class="faa_66b6l"/></g>`,
		"fallback": "cryptocurrency-color:fair",
	});
}

export default Component;
