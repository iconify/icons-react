import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs-2sqbvq.css';
import '../../css/a/a9jm--b4e.css';
import '../../css/b/b80sudb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gs-2sqbvq"/><path class="a9jm--b4e"/><path class="b80sudb3i"/></g>`,
		"fallback": "andrsrxn:device-pc-warning",
	});
}

export default Component;
