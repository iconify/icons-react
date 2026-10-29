import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tbo20qlcr.css';
import '../../css/e/e73toccuk.css';
import '../../css/x/xatf5tb_i.css';
import '../../css/u/up3rqob9n.css';
import '../../css/u/uhxoacb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tbo20qlcr wm-k"/><path class="e73toccuk wm-a"/><path class="wm-shadow xatf5tb_i"/><path class="up3rqob9n wm-k"/><path class="uhxoacb3s wm-a"/></g>`,
		"fallback": "withicons:chevrons-down-engrave",
	});
}

export default Component;
