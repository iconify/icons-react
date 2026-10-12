import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvo_itb6z.css';
import '../../css/s/sz1hmfb_l.css';
import '../../css/o/om4lpibwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvo_itb6z"/><path class="sz1hmfb_l"/><path class="om4lpibwq"/></g>`,
		"fallback": "lucide-extended:bed-single-duotone",
	});
}

export default Component;
