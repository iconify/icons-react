import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtugqgbae.css';
import '../../css/v/v1bqg_bxb.css';
import '../../css/r/r39sfgpbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 8.9 20.3)" class="mtugqgbae"/><rect transform="matrix(1 0 0 -1 8.9 20.3)" class="v1bqg_bxb"/><path class="r39sfgpbs"/></g>`,
		"fallback": "andrsrxn:align-horizontally",
	});
}

export default Component;
