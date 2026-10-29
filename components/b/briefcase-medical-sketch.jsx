import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ykm4gac9n.css';
import '../../css/u/ug04ojbab.css';
import '../../css/e/ec_xkzblh.css';
import '../../css/k/k0cxohbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ykm4gac9n"/><path class="ug04ojbab wm-a"/><path class="ec_xkzblh wm-k"/><path class="k0cxohbmd wm-a"/></g>`,
		"fallback": "withicons:briefcase-medical-sketch",
	});
}

export default Component;
