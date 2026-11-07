import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orf_yx79i.css';
import '../../css/d/dokex3bcs.css';
import '../../css/o/ocaweqb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="orf_yx79i"/><path class="dokex3bcs"/><path class="ocaweqb-l"/></g>`,
		"fallback": "solar:align-horizontal-center-linear",
	});
}

export default Component;
