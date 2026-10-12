import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz-y6myhv.css';
import '../../css/v/vrhry5beo.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pz-y6myhv"/><path class="vrhry5beo"/><path class="k1488cb1l"/></g>`,
		"fallback": "andrsrxn:image-plus",
	});
}

export default Component;
