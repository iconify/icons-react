import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vgdrhu2qc.css';
import '../../css/b/buo1kubox.css';
import '../../css/z/zwiw2-bkv.css';
import '../../css/g/g3w7qrfpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vgdrhu2qc"/><path class="buo1kubox"/><path class="zwiw2-bkv"/><path class="g3w7qrfpr"/></g>`,
		"fallback": "solar:bag-4-broken",
	});
}

export default Component;
