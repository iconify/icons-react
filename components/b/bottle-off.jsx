import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bm1pdl_ir.css';
import '../../css/m/me-pg4phm.css';
import '../../css/t/treh5uvrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bm1pdl_ir"/><path class="me-pg4phm"/><path class="treh5uvrz"/></g>`,
		"fallback": "tabler:bottle-off",
	});
}

export default Component;
