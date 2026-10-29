import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yzgi8xb4w.css';
import '../../css/o/ov9ho64it.css';
import '../../css/d/disb1cb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-a yzgi8xb4w"/><path class="ov9ho64it wm-k"/><path class="disb1cb5z wm-a"/></g>`,
		"fallback": "withicons:chart-network-sketch",
	});
}

export default Component;
