import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ml2kkc2to.css';
import '../../css/c/c53knpb4e.css';
import '../../css/k/ke6u_673h.css';
import '../../css/y/y129f9bjv.css';
import '../../css/k/k51ebbb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ml2kkc2to wm-deco"/><path class="c53knpb4e wm-k"/><path class="ke6u_673h wm-k"/><path class="wm-k y129f9bjv"/><path class="k51ebbb6x wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-up",
	});
}

export default Component;
