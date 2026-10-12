import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkl3aubcf.css';
import '../../css/v/vlo2tvb9g.css';
import '../../css/n/n14e2r6ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkl3aubcf"/><path class="vlo2tvb9g"/><path class="n14e2r6ne"/></g>`,
		"fallback": "andrsrxn:dna-off",
	});
}

export default Component;
