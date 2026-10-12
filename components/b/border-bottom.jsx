import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cxbevjbku.css';
import '../../css/b/bxd4hbc_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 2.05 21.88)" class="cxbevjbku"/><path class="bxd4hbc_s"/></g>`,
		"fallback": "andrsrxn:border-bottom",
	});
}

export default Component;
