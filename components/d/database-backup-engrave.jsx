import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zvuzrx56u.css';
import '../../css/w/w23qfacnz.css';
import '../../css/y/y95393_dl.css';
import '../../css/w/wci8o2bvn.css';
import '../../css/x/xfepiz__s.css';
import '../../css/r/rnsc04beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zvuzrx56u"/><path class="w23qfacnz wm-shadow"/><path class="y95393_dl"/><path class="wci8o2bvn"/><path class="xfepiz__s"/><path class="rnsc04beb"/></g>`,
		"fallback": "withicons:database-backup-engrave",
	});
}

export default Component;
