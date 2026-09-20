import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vxftstb4r.css';
import '../../css/z/z2-gbos-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vxftstb4r"/><path class="z2-gbos-e"/></g>`,
		"fallback": "keyline-icons:database-sharp-two-tone",
	});
}

export default Component;
