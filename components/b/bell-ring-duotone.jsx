import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0-tc4hmg.css';
import '../../css/r/rke2g1q2t.css';
import '../../css/m/m_l7ju9pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y0-tc4hmg"/><path class="rke2g1q2t"/><path class="m_l7ju9pr"/></g>`,
		"fallback": "lucide-extended:bell-ring-duotone",
	});
}

export default Component;
