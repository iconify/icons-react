import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmjur556u.css';
import '../../css/b/b9zba8f9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vmjur556u"/><path class="b9zba8f9d"/></g>`,
		"fallback": "andrsrxn:air-conditioner",
	});
}

export default Component;
