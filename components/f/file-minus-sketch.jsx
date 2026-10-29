import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i9tt7iemb.css';
import '../../css/l/la1da1bon.css';
import '../../css/z/z68_6dbbs.css';
import '../../css/d/dti5vzuij.css';
import '../../css/d/ds_glz1tz.css';
import '../../css/m/m4zyr0b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i9tt7iemb"/><path class="la1da1bon wm-k"/><path class="wm-k z68_6dbbs"/><path class="dti5vzuij wm-a"/><path class="ds_glz1tz wm-a"/><path class="m4zyr0b5h wm-a"/></g>`,
		"fallback": "withicons:file-minus-sketch",
	});
}

export default Component;
