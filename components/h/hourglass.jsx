import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktzwahbgs.css';
import '../../css/e/eojpwvi8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktzwahbgs"/><path class="eojpwvi8j"/></g>`,
		"fallback": "andrsrxn:hourglass",
	});
}

export default Component;
