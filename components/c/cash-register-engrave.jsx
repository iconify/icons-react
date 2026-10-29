import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mkh_6h2do.css';
import '../../css/m/majtcdc7y.css';
import '../../css/m/mvtddkbrz.css';
import '../../css/q/qlkgjzbfl.css';
import '../../css/g/ghy1agb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mkh_6h2do wm-k"/><path class="majtcdc7y wm-a"/><path class="mvtddkbrz wm-shadow"/><path class="qlkgjzbfl wm-k"/><path class="ghy1agb1b wm-a"/></g>`,
		"fallback": "withicons:cash-register-engrave",
	});
}

export default Component;
