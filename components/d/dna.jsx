import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkl3aubcf.css';
import '../../css/v/vlo2tvb9g.css';
import '../../css/n/nrpoi5tit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkl3aubcf"/><path class="vlo2tvb9g"/><path class="nrpoi5tit"/></g>`,
		"fallback": "andrsrxn:dna",
	});
}

export default Component;
