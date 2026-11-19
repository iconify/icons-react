import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl5t3--9r.css';
import '../../css/z/zx4vpbn8m.css';
import '../../css/s/ss3vr3z2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tl5t3--9r"/><path class="zx4vpbn8m"/><path class="ss3vr3z2z"/></g>`,
		"fallback": "andrsrxn:file-paper-clip",
	});
}

export default Component;
