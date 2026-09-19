import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/li-zi3elj.css';
import '../../css/b/bw511z_pe.css';
import '../../css/d/dfnr2jbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="li-zi3elj"/><path class="bw511z_pe"/><path class="dfnr2jbpz"/></g>`,
		"fallback": "hugeicons:credit-card-not-accept",
	});
}

export default Component;
