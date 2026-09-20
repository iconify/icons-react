import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/yt3u_9wzn.css';
import '../../css/s/s4s-ne9iv.css';
import '../../css/s/sf6m80b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="yt3u_9wzn"/><path class="s4s-ne9iv"/><path class="sf6m80b_v"/></g>`,
		"fallback": "streamline-cyber:business-dual-screen-window",
	});
}

export default Component;
