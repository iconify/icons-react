import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vuf7_xbay.css';
import '../../css/i/iq3a_n6pb.css';
import '../../css/s/svzookb7d.css';
import '../../css/s/s37zpibbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vuf7_xbay"/><path class="iq3a_n6pb wm-a"/><path class="svzookb7d wm-k"/><path class="s37zpibbo wm-a"/></g>`,
		"fallback": "withicons:egg-sketch",
	});
}

export default Component;
