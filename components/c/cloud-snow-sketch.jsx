import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spfuxgbyh.css';
import '../../css/q/qwd_5p9df.css';
import '../../css/n/n-yhscb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="spfuxgbyh"/><path class="qwd_5p9df wm-k"/><path class="n-yhscb1g wm-a"/></g>`,
		"fallback": "withicons:cloud-snow-sketch",
	});
}

export default Component;
