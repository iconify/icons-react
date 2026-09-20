import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hk6abm7ns.css';
import '../../css/t/tkp_8ackj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hk6abm7ns"/><path class="tkp_8ackj"/></g>`,
		"fallback": "keyline-icons:inbox-sharp-fill",
	});
}

export default Component;
