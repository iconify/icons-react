import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gcrhrmmun.css';
import '../../css/y/ypxhweb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gcrhrmmun"/><path class="ypxhweb_v"/></g>`,
		"fallback": "keyline-icons:globe-check-sharp-fill",
	});
}

export default Component;
