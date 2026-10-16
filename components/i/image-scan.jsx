import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/v/vn65_acxb.css';
import '../../css/t/tpzzm753i.css';
import '../../css/e/e-fk_vb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="vn65_acxb"/><rect class="tpzzm753i"/><path class="e-fk_vb4b"/></g>`,
		"fallback": "andrsrxn:image-scan",
	});
}

export default Component;
