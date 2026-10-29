import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pcsz0c02v.css';
import '../../css/n/n8kpz1zht.css';
import '../../css/b/bi-ep5baw.css';
import '../../css/e/eyqtot1bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pcsz0c02v wm-k"/><path class="n8kpz1zht wm-a"/><path class="bi-ep5baw wm-k"/><path class="eyqtot1bt wm-a"/></g>`,
		"fallback": "withicons:calendar-span-sketch",
	});
}

export default Component;
