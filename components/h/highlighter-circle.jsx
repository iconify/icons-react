import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhcvf5_vd.css';
import '../../css/k/ky6iajb0c.css';
import '../../css/i/ivpl2abwn.css';
import '../../css/v/vy0mydtlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bhcvf5_vd"/><path class="ky6iajb0c"/><path class="ivpl2abwn"/><path class="vy0mydtlr"/></g>`,
		"fallback": "andrsrxn:highlighter-circle",
	});
}

export default Component;
