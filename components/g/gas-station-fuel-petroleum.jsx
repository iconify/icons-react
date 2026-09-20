import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/uz8x1objw.css';
import '../../css/y/yt8pvybck.css';
import '../../css/d/drmbseenh.css';
import '../../css/p/p433282pm.css';
import '../../css/y/y8k-8lb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="uz8x1objw"/><path class="yt8pvybck"/><path class="drmbseenh"/><path class="p433282pm"/><path class="y8k-8lb4b"/></g>`,
		"fallback": "streamline-sharp-color:gas-station-fuel-petroleum",
	});
}

export default Component;
