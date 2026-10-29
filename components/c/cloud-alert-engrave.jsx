import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nezjtixvo.css';
import '../../css/f/ftut6hr7j.css';
import '../../css/c/cvilh7buk.css';
import '../../css/g/g56b45b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nezjtixvo wm-k"/><path class="ftut6hr7j wm-shadow"/><path class="cvilh7buk wm-k"/><path class="g56b45b0x wm-a"/></g>`,
		"fallback": "withicons:cloud-alert-engrave",
	});
}

export default Component;
