import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2m8j6d2s.css';
import '../../css/u/uvhz12b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a2m8j6d2s"/><path class="uvhz12b2f"/></g>`,
		"fallback": "andrsrxn:container",
	});
}

export default Component;
