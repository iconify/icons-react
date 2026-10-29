import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ca6loi6wc.css';
import '../../css/s/spndp72wt.css';
import '../../css/w/w38nzkbws.css';
import '../../css/q/q5yic0brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ca6loi6wc"/><path class="spndp72wt wm-k"/><path class="w38nzkbws wm-k"/><path class="q5yic0brb wm-a"/></g>`,
		"fallback": "withicons:folder-open-sketch",
	});
}

export default Component;
