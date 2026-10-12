import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcpki6biv.css';
import '../../css/p/pxuxnnb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gcpki6biv"/><path class="pxuxnnb7i"/></g>`,
		"fallback": "andrsrxn:flag",
	});
}

export default Component;
