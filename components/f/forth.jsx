import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7apoginp.css';
import '../../css/w/wwaqembnl.css';
import '../../css/r/ryh-cf8_k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="w7apoginp"/><path class="wwaqembnl"/><path class="ryh-cf8_k"/></g>`,
		"fallback": "skill-icons:forth",
	});
}

export default Component;
