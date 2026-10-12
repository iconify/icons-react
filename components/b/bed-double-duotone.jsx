import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2c_h5xxn.css';
import '../../css/w/wvwdkcb2e.css';
import '../../css/u/u2vuu1tco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2c_h5xxn"/><path class="wvwdkcb2e"/><path class="u2vuu1tco"/></g>`,
		"fallback": "lucide-extended:bed-double-duotone",
	});
}

export default Component;
