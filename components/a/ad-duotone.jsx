import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_2a_sbsk.css';
import '../../css/m/mgc_dm9_h.css';
import '../../css/s/s805e4aqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d_2a_sbsk"/><path class="mgc_dm9_h"/><path class="s805e4aqh"/></g>`,
		"fallback": "lucide-extended:ad-duotone",
	});
}

export default Component;
