import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w5c8y-14a.css';
import '../../css/x/xc5g5bbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w5c8y-14a"/><path class="xc5g5bbic"/></g>`,
		"fallback": "keyline-icons:file-x-sharp-two-tone",
	});
}

export default Component;
