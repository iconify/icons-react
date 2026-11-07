import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ktzyqj07d.css';
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
		"content": `<g class="ipq1z-bjh"><path class="ktzyqj07d"/><path class="dokex3bcs"/><path class="ocaweqb-l"/></g>`,
		"fallback": "solar:align-horizontal-center-line-duotone",
	});
}

export default Component;
