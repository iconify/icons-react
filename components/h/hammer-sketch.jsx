import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uu-llwbjg.css';
import '../../css/s/s_8ird94j.css';
import '../../css/k/ki4c-rmpi.css';
import '../../css/v/vsn4cuk_g.css';
import '../../css/w/w0k34vd7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uu-llwbjg"/><path class="s_8ird94j wm-k"/><path class="ki4c-rmpi wm-a"/><path class="vsn4cuk_g wm-k"/><path class="w0k34vd7f wm-a"/></g>`,
		"fallback": "withicons:hammer-sketch",
	});
}

export default Component;
