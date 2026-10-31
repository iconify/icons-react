import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sct98hluz.css';
import '../../css/d/d3p653v9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sct98hluz"/><path class="d3p653v9u"/></g>`,
		"fallback": "coolicons:clock-8-duotone-round",
	});
}

export default Component;
