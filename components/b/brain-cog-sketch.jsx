import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ah46elb3h.css';
import '../../css/c/c60tcacvt.css';
import '../../css/d/d8hyaw_-d.css';
import '../../css/k/kj80ggv8d.css';
import '../../css/i/iy-yox1gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ah46elb3h wm-k"/><path class="c60tcacvt wm-a"/><path class="d8hyaw_-d wm-k"/><path class="kj80ggv8d wm-a"/><path class="iy-yox1gu wm-s"/></g>`,
		"fallback": "withicons:brain-cog-sketch",
	});
}

export default Component;
