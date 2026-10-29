import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xyhicqlan.css';
import '../../css/s/s24l1zlnp.css';
import '../../css/g/gu72yj-en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xyhicqlan"/><path class="s24l1zlnp wm-k"/><path class="gu72yj-en wm-a"/></g>`,
		"fallback": "withicons:dollar-sign-sketch",
	});
}

export default Component;
