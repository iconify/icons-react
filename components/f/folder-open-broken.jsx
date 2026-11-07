import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nrv9p_b5h.css';
import '../../css/j/j8r4okiod.css';
import '../../css/s/s0kdq1bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nrv9p_b5h"/><path class="j8r4okiod"/><path class="s0kdq1bqe"/></g>`,
		"fallback": "solar:folder-open-broken",
	});
}

export default Component;
