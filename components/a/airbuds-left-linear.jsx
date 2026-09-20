import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ubwfpy16r.css';
import '../../css/m/ms74kbcwg.css';
import '../../css/i/iuccl_bxa.css';
import '../../css/a/a_mtj062n.css';
import '../../css/l/lcrq5obob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ubwfpy16r"/><path class="ms74kbcwg"/><circle transform="matrix(-1 0 0 1 21 11)" class="iuccl_bxa"/><path class="a_mtj062n"/><path class="lcrq5obob"/></g>`,
		"fallback": "solar:airbuds-left-linear",
	});
}

export default Component;
