import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dak4klbte.css';
import '../../css/p/pz1wa_8gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dak4klbte"/><path class="pz1wa_8gt"/></g>`,
		"fallback": "andrsrxn:heart",
	});
}

export default Component;
