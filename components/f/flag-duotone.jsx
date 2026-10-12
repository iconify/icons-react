import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c53uimblm.css';
import '../../css/y/yd4-3_7nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c53uimblm"/><path class="yd4-3_7nk"/></g>`,
		"fallback": "lucide-extended:flag-duotone",
	});
}

export default Component;
