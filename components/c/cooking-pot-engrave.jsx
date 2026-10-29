import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ierrpibnk.css';
import '../../css/m/mzn8-sbvw.css';
import '../../css/x/xg9zu_abp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ierrpibnk"/><path class="mzn8-sbvw wm-shadow"/><path class="xg9zu_abp"/></g>`,
		"fallback": "withicons:cooking-pot-engrave",
	});
}

export default Component;
