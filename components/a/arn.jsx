import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noupjmrck.css';
import '../../css/b/binqqnbay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="noupjmrck"/><path class="binqqnbay"/></g>`,
		"fallback": "cryptocurrency-color:arn",
	});
}

export default Component;
