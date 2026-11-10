import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ne-lg_iew.css';
import '../../css/d/dj0jz1r4t.css';
import '../../css/k/kpgpbybfg.css';
import '../../css/c/chiy8bbjq.css';
import '../../css/s/sgxoqfbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ne-lg_iew"/><path class="dj0jz1r4t"/><path class="kpgpbybfg"/><path class="chiy8bbjq"/><path class="sgxoqfbpv"/></g>`,
		"fallback": "andrsrxn:device-laptop-image",
	});
}

export default Component;
