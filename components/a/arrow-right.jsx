import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3gizfb_u.css';
import '../../css/z/z95qg-6hx.css';
import '../../css/l/l1j5ucc-y.css';
import '../../css/p/pqnhgpb6g.css';
import '../../css/u/uo8qjwdiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a3gizfb_u wm-deco"/><path class="wm-k z95qg-6hx"/><path class="l1j5ucc-y wm-k"/><path class="pqnhgpb6g wm-k"/><path class="uo8qjwdiv wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-right",
	});
}

export default Component;
