import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dgsjy9b9z.css';
import '../../css/y/yauv4zzce.css';
import '../../css/v/v2r3rlblx.css';
import '../../css/c/c-1i_6wtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dgsjy9b9z"/><path class="wm-a yauv4zzce"/><path class="v2r3rlblx wm-k"/><path class="c-1i_6wtz wm-a"/></g>`,
		"fallback": "withicons:image-sketch",
	});
}

export default Component;
