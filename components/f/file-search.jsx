import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnbjef5ys.css';
import '../../css/s/sae_6acyt.css';
import '../../css/q/qc0lnbpwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnbjef5ys"/><path class="sae_6acyt"/><path class="qc0lnbpwi"/></g>`,
		"fallback": "andrsrxn:file-search",
	});
}

export default Component;
