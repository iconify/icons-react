import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eai0jfc7w.css';
import '../../css/h/h-3r9vuid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eai0jfc7w"/><path class="h-3r9vuid"/></g>`,
		"fallback": "andrsrxn:credit-card-x",
	});
}

export default Component;
