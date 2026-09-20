import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gcrhrmmun.css';
import '../../css/n/nki-9-1lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gcrhrmmun"/><path class="nki-9-1lf"/></g>`,
		"fallback": "keyline-icons:globe-x-sharp-fill",
	});
}

export default Component;
