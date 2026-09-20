import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mj5ihl_xe.css';
import '../../css/t/tytl47brg.css';
import '../../css/h/hk10o4-it.css';
import '../../css/h/hvb2mdben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mj5ihl_xe"/><path class="tytl47brg"/><path class="hk10o4-it"/><path class="hvb2mdben"/></g>`,
		"fallback": "streamline-sharp-color:flash-timer",
	});
}

export default Component;
