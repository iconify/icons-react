import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u1jwn7bvu.css';
import '../../css/p/ppq-0kb9b.css';
import '../../css/d/dg7qrmb6g.css';
import '../../css/u/ue7lx6y0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="u1jwn7bvu"/><path class="ppq-0kb9b"/><path class="dg7qrmb6g"/><path class="ue7lx6y0z"/></g>`,
		"fallback": "hugeicons:ai-image",
	});
}

export default Component;
