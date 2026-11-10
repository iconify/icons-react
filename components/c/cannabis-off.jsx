import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bus2zma9i.css';
import '../../css/t/t87nbebsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bus2zma9i"/><path class="t87nbebsw"/></g>`,
		"fallback": "andrsrxn:cannabis-off",
	});
}

export default Component;
