import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cr30y-kzi.css';
import '../../css/y/yz_8roe6m.css';
import '../../css/c/c60v71uop.css';
import '../../css/h/hupp56t8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cr30y-kzi"/><path class="yz_8roe6m"/><path class="c60v71uop"/><path class="hupp56t8j"/></g>`,
		"fallback": "streamline-sharp-color:cleaning-room-woman",
	});
}

export default Component;
