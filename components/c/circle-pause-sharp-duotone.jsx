import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tyv81fb_p.css';
import '../../css/w/w4sl7vbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tyv81fb_p"/><path class="w4sl7vbkv"/></g>`,
		"fallback": "keyline-icons:circle-pause-sharp-duotone",
	});
}

export default Component;
