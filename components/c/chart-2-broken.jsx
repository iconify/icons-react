import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfdxhcbxe.css';
import '../../css/g/gvtbf6uqv.css';
import '../../css/n/n_r4n_bvp.css';
import '../../css/q/qren0kb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yfdxhcbxe"/><path class="gvtbf6uqv"/><path class="n_r4n_bvp"/><path class="qren0kb9n"/></g>`,
		"fallback": "solar:chart-2-broken",
	});
}

export default Component;
