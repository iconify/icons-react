import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wl2tej6zd.css';
import '../../css/y/y0-h8cyyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wl2tej6zd"/><path class="y0-h8cyyr"/></g>`,
		"fallback": "struq:bell",
	});
}

export default Component;
