import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oj76pzyor.css';
import '../../css/p/pw6mitbie.css';
import '../../css/t/tbegqd3ls.css';
import '../../css/r/r8kz99blj.css';
import '../../css/k/k2_ouvben.css';
import '../../css/o/obop-kb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oj76pzyor wm-k"/><path class="pw6mitbie wm-a"/><path class="tbegqd3ls wm-shadow"/><path class="r8kz99blj wm-k"/><path class="k2_ouvben wm-a"/><path class="obop-kb6d wm-a"/></g>`,
		"fallback": "withicons:avatar-person-wheelchair-engrave",
	});
}

export default Component;
