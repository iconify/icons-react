import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g3y3mu3mp.css';
import '../../css/m/mrd0i8bef.css';
import '../../css/b/bw511z_pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g3y3mu3mp"/><path class="mrd0i8bef"/><path class="bw511z_pe"/></g>`,
		"fallback": "hugeicons:credit-card-add",
	});
}

export default Component;
