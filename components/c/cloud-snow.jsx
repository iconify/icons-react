import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ldknqzb_l.css';
import '../../css/w/wsl9xfbsr.css';
import '../../css/v/v3w8qcb4o.css';
import '../../css/p/ptiuog4lv.css';
import '../../css/u/usyja4bwp.css';
import '../../css/p/pgljufbct.css';
import '../../css/l/lkv7a5b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ldknqzb_l wm-a"/><path class="wm-a wsl9xfbsr"/><path class="v3w8qcb4o wm-a"/><path class="ptiuog4lv wm-k"/><path class="usyja4bwp wm-k"/><path class="pgljufbct wm-k"/><path class="lkv7a5b3a wm-shine"/></g>`,
		"fallback": "withicons-anime:cloud-snow",
	});
}

export default Component;
