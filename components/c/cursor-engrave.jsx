import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qxum5lb5g.css';
import '../../css/c/cz6jy1boo.css';
import '../../css/q/qvx_ar2cl.css';
import '../../css/c/cjivcabhf.css';
import '../../css/i/ivj0dyb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qxum5lb5g wm-k"/><path class="cz6jy1boo wm-a"/><path class="qvx_ar2cl wm-shadow"/><path class="cjivcabhf wm-k"/><path class="ivj0dyb1p wm-a"/></g>`,
		"fallback": "withicons:cursor-engrave",
	});
}

export default Component;
