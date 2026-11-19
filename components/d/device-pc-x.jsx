import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs-2sqbvq.css';
import '../../css/l/l89-_0wef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gs-2sqbvq"/><path class="l89-_0wef"/></g>`,
		"fallback": "andrsrxn:device-pc-x",
	});
}

export default Component;
