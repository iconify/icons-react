import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nggqcnpzg.css';
import '../../css/a/aty9t3x9e.css';
import '../../css/s/sag5w3b_y.css';
import '../../css/y/yyjy8ccqo.css';
import '../../css/p/pd4bwcw9z.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nggqcnpzg"/><path class="aty9t3x9e"/><path class="sag5w3b_y"/><path class="yyjy8ccqo"/><path class="pd4bwcw9z"/><path class="i4dcgmbin"/></g>`,
		"fallback": "solar:folder-zip-broken",
	});
}

export default Component;
