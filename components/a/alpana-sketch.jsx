import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dokvabczg.css';
import '../../css/o/oas66acpd.css';
import '../../css/g/ggxowbc9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dokvabczg wm-k"/><path class="oas66acpd wm-k"/><path class="ggxowbc9f wm-a"/></g>`,
		"fallback": "withicons:alpana-sketch",
	});
}

export default Component;
