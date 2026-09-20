import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sb91s1bok.css';
import '../../css/w/wupeggpqh.css';
import '../../css/g/g8js72ttb.css';
import '../../css/r/rcjq3abea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sb91s1bok"/><path class="wupeggpqh"/><path class="g8js72ttb"/><path class="rcjq3abea"/></g>`,
		"fallback": "streamline-sharp-color:ai-gaming-robot",
	});
}

export default Component;
