import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gh8cru6va.css';
import '../../css/p/phhcb1buc.css';
import '../../css/x/xmz6v6vvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gh8cru6va"/><path class="phhcb1buc wm-k"/><path class="wm-a xmz6v6vvs"/></g>`,
		"fallback": "withicons:camera-sketch",
	});
}

export default Component;
