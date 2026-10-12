import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn-rxeb2h.css';
import '../../css/z/zyzfz0b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wn-rxeb2h"/><path class="zyzfz0b_j"/></g>`,
		"fallback": "lucide-extended:crown-duotone",
	});
}

export default Component;
