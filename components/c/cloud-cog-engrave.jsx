import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kejil4ukc.css';
import '../../css/h/hlp4e0xzf.css';
import '../../css/d/dc1f5zbic.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/w/w199b4q7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kejil4ukc wm-k"/><path class="hlp4e0xzf wm-s"/><path class="dc1f5zbic wm-shadow"/><path class="m2ebxhp-u wm-k"/><path class="w199b4q7i wm-s"/></g>`,
		"fallback": "withicons:cloud-cog-engrave",
	});
}

export default Component;
