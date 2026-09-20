import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e328uibxt.css';
import '../../css/k/kll5nub1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e328uibxt"/><path class="kll5nub1o"/></g>`,
		"fallback": "streamline-ultimate-color:attachment",
	});
}

export default Component;
