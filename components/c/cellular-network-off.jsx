import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf8asjb5u.css';
import '../../css/x/xxw0qmgoi.css';
import '../../css/o/o62t2acxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vf8asjb5u"/><circle class="xxw0qmgoi"/><path class="o62t2acxr"/></g>`,
		"fallback": "andrsrxn:cellular-network-off",
	});
}

export default Component;
