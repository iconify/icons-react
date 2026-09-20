import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d_riacq0t.css';
import '../../css/n/n6kdhccvk.css';
import '../../css/s/s0kdq1bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d_riacq0t"/><path class="n6kdhccvk"/><path class="s0kdq1bqe"/></g>`,
		"fallback": "solar:folder-open-broken",
	});
}

export default Component;
