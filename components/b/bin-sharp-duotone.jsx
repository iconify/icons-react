import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yghrljg0r.css';
import '../../css/f/f7a7bc0ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yghrljg0r"/><path class="f7a7bc0ju"/></g>`,
		"fallback": "keyline-icons:bin-sharp-duotone",
	});
}

export default Component;
