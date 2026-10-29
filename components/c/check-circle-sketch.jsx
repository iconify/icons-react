import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gsxicobdl.css';
import '../../css/t/tzpkcedjf.css';
import '../../css/o/ov2wiebyk.css';
import '../../css/s/s1ykx_bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gsxicobdl"/><path class="tzpkcedjf wm-a"/><path class="ov2wiebyk wm-k"/><path class="s1ykx_bri wm-a"/></g>`,
		"fallback": "withicons:check-circle-sketch",
	});
}

export default Component;
