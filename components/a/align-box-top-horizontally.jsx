import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdjejti9j.css';
import '../../css/b/bb3payb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tdjejti9j"/><path class="bb3payb7j"/></g>`,
		"fallback": "andrsrxn:align-box-top-horizontally",
	});
}

export default Component;
