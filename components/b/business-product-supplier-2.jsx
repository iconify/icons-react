import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf17bt6qm.css';
import '../../css/p/pgmpppbae.css';
import '../../css/r/rkwfe99am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hf17bt6qm"/><path class="pgmpppbae"/><path class="rkwfe99am"/></g>`,
		"fallback": "streamline-freehand-color:business-product-supplier-2",
	});
}

export default Component;
