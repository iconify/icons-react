import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pxa9npbvu.css';
import '../../css/k/kl8-trqza.css';
import '../../css/x/xdw_ihbgr.css';
import '../../css/t/t_xr9_bii.css';
import '../../css/y/y045j_b3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pxa9npbvu"/><path class="kl8-trqza"/><path class="xdw_ihbgr"/><path class="t_xr9_bii"/><path class="y045j_b3i"/></g>`,
		"fallback": "streamline-color:instagram",
	});
}

export default Component;
