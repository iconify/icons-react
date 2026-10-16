import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eii_eh0ee.css';
import '../../css/u/uaiw1fbwq.css';
import '../../css/z/zzbikeb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eii_eh0ee"/><path class="uaiw1fbwq"/><path class="zzbikeb7b"/></g>`,
		"fallback": "andrsrxn:cloud-drops",
	});
}

export default Component;
