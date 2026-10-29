import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bsuy9b0zv.css';
import '../../css/q/qoldq5b5w.css';
import '../../css/z/zagc9leuw.css';
import '../../css/v/vkffuubtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bsuy9b0zv wm-k"/><path class="qoldq5b5w wm-a"/><path class="wm-k zagc9leuw"/><path class="vkffuubtt wm-a"/></g>`,
		"fallback": "withicons:container-sketch",
	});
}

export default Component;
