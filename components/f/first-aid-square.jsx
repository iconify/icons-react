import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vycdnf_th.css';
import '../../css/b/b-bx3wb2x.css';
import '../../css/v/v1c18gb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vycdnf_th"/><path class="b-bx3wb2x"/><path class="v1c18gb3w"/></g>`,
		"fallback": "andrsrxn:first-aid-square",
	});
}

export default Component;
