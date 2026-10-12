import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbft5vf0c.css';
import '../../css/s/s2k0i-b_b.css';
import '../../css/f/f4oz41rqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbft5vf0c"/><path class="s2k0i-b_b"/><path class="f4oz41rqn"/></g>`,
		"fallback": "lucide-extended:graduation-cap-duotone",
	});
}

export default Component;
