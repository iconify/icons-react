import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hqui4bbxw.css';
import '../../css/m/mflidkgwp.css';
import '../../css/o/ozp63ob-s.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/d/dokvecbou.css';
import '../../css/s/svzd488el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hqui4bbxw wm-k"/><path class="mflidkgwp wm-a"/><path class="ozp63ob-s wm-shadow"/><path class="wm-k y3j3vjb4e"/><path class="dokvecbou wm-a"/><path class="svzd488el wm-s"/></g>`,
		"fallback": "withicons:briefcase-business-engrave",
	});
}

export default Component;
