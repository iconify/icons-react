import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-cxivbkz.css';
import '../../css/u/und_hqb0h.css';
import '../../css/r/rnp29ibmf.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-cxivbkz"/><path class="und_hqb0h"/><path class="rnp29ibmf"/></g>`,
		"fallback": "cif:ie",
	});
}

export default Component;
