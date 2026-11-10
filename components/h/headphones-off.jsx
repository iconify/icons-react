import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc8zxob7f.css';
import '../../css/u/u2i2orcal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vc8zxob7f"/><path class="u2i2orcal"/></g>`,
		"fallback": "andrsrxn:headphones-off",
	});
}

export default Component;
