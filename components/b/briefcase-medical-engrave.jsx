import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oi98yqb2d.css';
import '../../css/e/em9082e6z.css';
import '../../css/o/ozp63ob-s.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/h/hayg57blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oi98yqb2d wm-k"/><path class="em9082e6z wm-a"/><path class="ozp63ob-s wm-shadow"/><path class="wm-k y3j3vjb4e"/><path class="hayg57blh wm-a"/></g>`,
		"fallback": "withicons:briefcase-medical-engrave",
	});
}

export default Component;
