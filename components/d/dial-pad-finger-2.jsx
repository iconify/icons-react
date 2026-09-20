import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bb-99ex1u.css';
import '../../css/p/pwxuvk4_g.css';
import '../../css/w/wgjovc_7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bb-99ex1u"/><path class="pwxuvk4_g"/><path class="wgjovc_7e"/></g>`,
		"fallback": "streamline-sharp-color:dial-pad-finger-2",
	});
}

export default Component;
