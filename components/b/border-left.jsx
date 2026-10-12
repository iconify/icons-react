import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okkbwuxzf.css';
import '../../css/b/ber-erkwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="okkbwuxzf"/><path class="ber-erkwh"/></g>`,
		"fallback": "andrsrxn:border-left",
	});
}

export default Component;
