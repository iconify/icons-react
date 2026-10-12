import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgs8_4bvf.css';
import '../../css/d/dro043b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pgs8_4bvf"/><path class="dro043b-f"/></g>`,
		"fallback": "andrsrxn:box-minus",
	});
}

export default Component;
