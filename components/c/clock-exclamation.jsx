import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u6vyy4bjk.css';
import '../../css/n/n4iq2bx1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u6vyy4bjk"/><path class="n4iq2bx1p"/></g>`,
		"fallback": "tabler:clock-exclamation",
	});
}

export default Component;
