import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux0u4xb3t.css';
import '../../css/s/sy45z6j-n.css';
import '../../css/k/kqqt3jirm.css';
import '../../css/m/mi4cddc2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ux0u4xb3t"/><rect transform="matrix(-1 0 0 1 20 1.72)" class="sy45z6j-n"/><rect transform="matrix(-1 0 0 1 16.67 5.78)" class="kqqt3jirm"/><path class="mi4cddc2p"/></g>`,
		"fallback": "andrsrxn:article",
	});
}

export default Component;
