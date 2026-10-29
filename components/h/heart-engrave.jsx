import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m_-dhfbtd.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m_-dhfbtd"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb"/></g>`,
		"fallback": "withicons:heart-engrave",
	});
}

export default Component;
