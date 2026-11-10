import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na5mbivou.css';
import '../../css/i/ihkfm5rtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="na5mbivou"/><path clip-rule="evenodd" class="ihkfm5rtj"/></g>`,
		"fallback": "andrsrxn:closed-captioning-filled",
	});
}

export default Component;
