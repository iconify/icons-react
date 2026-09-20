import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdpgh_biu.css';
import '../../css/y/y0jw3_b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xdpgh_biu"/><path class="y0jw3_b4r"/></g>`,
		"fallback": "lucide:cup-soda",
	});
}

export default Component;
