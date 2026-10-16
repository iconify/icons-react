import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opu_zgbun.css';
import '../../css/f/fdx9bm39w.css';
import '../../css/b/btlo4nkcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opu_zgbun"/><path class="fdx9bm39w"/><path class="btlo4nkcn"/></g>`,
		"fallback": "andrsrxn:earbuds-left",
	});
}

export default Component;
