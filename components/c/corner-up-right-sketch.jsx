import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d5i159bou.css';
import '../../css/g/gvvo_3b-f.css';
import '../../css/g/g59_xzp-m.css';
import '../../css/p/psmr5dd8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d5i159bou wm-k"/><path class="gvvo_3b-f wm-a"/><path class="g59_xzp-m wm-k"/><path class="psmr5dd8q wm-a"/></g>`,
		"fallback": "withicons:corner-up-right-sketch",
	});
}

export default Component;
