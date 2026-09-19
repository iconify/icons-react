import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et-jf20mo.css';
import '../../css/a/a9s0llb_c.css';
import '../../css/d/dthcxeb8v.css';
import '../../css/k/k-p4f3sbw.css';
import '../../css/x/xc31xiz5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et-jf20mo"/><path class="a9s0llb_c"/><path class="dthcxeb8v"/><path class="k-p4f3sbw"/><path class="xc31xiz5m"/>`,
		"fallback": "fxemoji:frontfacingchick",
	});
}

export default Component;
