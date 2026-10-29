import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lx8guvb-i.css';
import '../../css/w/wqvj56bhj.css';
import '../../css/e/eo_oo5b2r.css';
import '../../css/l/lhyb3bbbn.css';
import '../../css/x/x2f5ebbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lx8guvb-i wm-k"/><path class="wm-a wqvj56bhj"/><path class="eo_oo5b2r wm-shadow"/><path class="lhyb3bbbn wm-k"/><path class="wm-a x2f5ebbeb"/></g>`,
		"fallback": "withicons:grape-engrave",
	});
}

export default Component;
