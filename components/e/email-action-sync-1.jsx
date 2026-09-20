import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgtq8ck2c.css';
import '../../css/j/j_yd-f80s.css';
import '../../css/m/m0h1ocbpm.css';
import '../../css/s/simta-bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rgtq8ck2c"/><path class="j_yd-f80s"/><path class="m0h1ocbpm"/><path class="simta-bkt"/></g>`,
		"fallback": "streamline-freehand:email-action-sync-1",
	});
}

export default Component;
