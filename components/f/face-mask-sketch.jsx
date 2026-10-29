import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n5crp9bgp.css';
import '../../css/l/lgultwbwl.css';
import '../../css/b/b2ekdbbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n5crp9bgp wm-a"/><path class="lgultwbwl wm-k"/><path class="b2ekdbbqw wm-a"/></g>`,
		"fallback": "withicons:face-mask-sketch",
	});
}

export default Component;
