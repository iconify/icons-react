import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpj-0xbka.css';
import '../../css/u/urf6_jb3f.css';
import '../../css/m/mhq-sxz_r.css';
import '../../css/r/ruwe7ac_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rpj-0xbka"/><rect transform="matrix(0 -1 -1 0 14.7 17.37)" class="urf6_jb3f"/><rect transform="matrix(0 -1 -1 0 14.7 17.37)" class="mhq-sxz_r"/><path class="ruwe7ac_c"/></g>`,
		"fallback": "andrsrxn:dron",
	});
}

export default Component;
