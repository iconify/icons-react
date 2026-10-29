import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zqdj91bic.css';
import '../../css/i/i_pnv56zt.css';
import '../../css/g/gjd70ubvd.css';
import '../../css/y/yfr2y5n3b.css';
import '../../css/o/o38mptbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zqdj91bic"/><path class="i_pnv56zt wm-a"/><path class="gjd70ubvd wm-shadow"/><path class="wm-k yfr2y5n3b"/><path class="o38mptbie wm-a"/></g>`,
		"fallback": "withicons:cast-engrave",
	});
}

export default Component;
