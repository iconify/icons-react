import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v8ivd-pjc.css';
import '../../css/a/aot10xncv.css';
import '../../css/t/txvu2kl1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v8ivd-pjc"/><path class="aot10xncv wm-shadow"/><path class="txvu2kl1h"/></g>`,
		"fallback": "withicons:clapperboard-engrave",
	});
}

export default Component;
