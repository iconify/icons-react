import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mb0h31oir.css';
import '../../css/q/qd_hqobgv.css';
import '../../css/v/v__h_gffi.css';
import '../../css/p/pd6vc2bsb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mb0h31oir"/><path clip-rule="evenodd" class="qd_hqobgv"/><path clip-rule="evenodd" class="v__h_gffi"/><path class="pd6vc2bsb"/></g>`,
		"fallback": "glyphs-poly:bell-slash",
	});
}

export default Component;
