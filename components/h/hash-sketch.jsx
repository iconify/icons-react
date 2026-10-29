import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwb9y2bsn.css';
import '../../css/x/xmya3k2jv.css';
import '../../css/m/mjmnulbuh.css';
import '../../css/j/jczszebcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kwb9y2bsn wm-k"/><path class="wm-a xmya3k2jv"/><path class="mjmnulbuh wm-k"/><path class="jczszebcb wm-a"/></g>`,
		"fallback": "withicons:hash-sketch",
	});
}

export default Component;
