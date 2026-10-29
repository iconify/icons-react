import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uzx1m_6ud.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/d/dmkbq9bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uzx1m_6ud wm-k"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb wm-k"/><path class="dmkbq9bjw wm-a"/></g>`,
		"fallback": "withicons:heart-pulse-engrave",
	});
}

export default Component;
