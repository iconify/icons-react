import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkqzp6b7z.css';
import '../../css/h/hmmzx_bpn.css';
import '../../css/f/f0ihd3b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.3 20.18)" class="zkqzp6b7z"/><rect transform="matrix(0 -1 -1 0 22.3 20.18)" class="hmmzx_bpn"/><path class="f0ihd3b-x"/></g>`,
		"fallback": "andrsrxn:field-textarea",
	});
}

export default Component;
