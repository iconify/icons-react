import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hup412r_w.css';
import '../../css/c/cbs6mppya.css';
import '../../css/q/qq0rg2b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 11.99 11.99)" class="hup412r_w"/><path class="cbs6mppya"/><path class="qq0rg2b7v"/></g>`,
		"fallback": "andrsrxn:globe-x",
	});
}

export default Component;
