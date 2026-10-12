import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecmac5bwr.css';
import '../../css/x/xo9udubkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ecmac5bwr"/><path class="xo9udubkl"/></g>`,
		"fallback": "andrsrxn:handbag",
	});
}

export default Component;
