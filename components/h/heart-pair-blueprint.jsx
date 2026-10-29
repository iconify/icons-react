import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nwr148bbc.css';
import '../../css/n/nufe5fusv.css';
import '../../css/q/qwk2fl09i.css';
import '../../css/d/dxi_82bfo.css';
import '../../css/w/wmd00dbav.css';
import '../../css/g/govlrwblb.css';
import '../../css/h/ho5314bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nwr148bbc wm-deco"/><path class="nufe5fusv wm-deco"/><path class="qwk2fl09i wm-deco"/><path class="dxi_82bfo wm-k"/><path class="wm-a wmd00dbav"/><path class="govlrwblb wm-k"/><path class="ho5314bzc wm-a"/></g>`,
		"fallback": "withicons:heart-pair-blueprint",
	});
}

export default Component;
