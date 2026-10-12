import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/s/s6te4phsj.css';
import '../../css/l/lku-fvb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="s6te4phsj"/><path class="lku-fvb2m"/></g>`,
		"fallback": "lucide-extended:dice-1-duotone",
	});
}

export default Component;
