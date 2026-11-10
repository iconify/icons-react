import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-73oypxc.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/r/r_i1xrbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-73oypxc"/><path class="tm0ea5ulw"/><path class="r_i1xrbip"/></g>`,
		"fallback": "andrsrxn:copy-code",
	});
}

export default Component;
