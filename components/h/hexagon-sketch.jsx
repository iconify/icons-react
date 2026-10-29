import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h805s_bny.css';
import '../../css/q/qm565hbxw.css';
import '../../css/x/xg34h7wbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h805s_bny"/><path class="qm565hbxw wm-k"/><path class="wm-a xg34h7wbo"/></g>`,
		"fallback": "withicons:hexagon-sketch",
	});
}

export default Component;
