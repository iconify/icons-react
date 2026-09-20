import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cf26ob75g.css';
import '../../css/o/o1jzz37hz.css';
import '../../css/g/g0byy1r_s.css';
import '../../css/i/ik90ebisb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cf26ob75g"/><path class="o1jzz37hz"/><path class="g0byy1r_s"/><path class="ik90ebisb"/></g>`,
		"fallback": "streamline-sharp-color:chat-two-bubbles-oval",
	});
}

export default Component;
