import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p452o1b1d.css';
import '../../css/v/vge0ddctk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p452o1b1d"/><path class="vge0ddctk"/></g>`,
		"fallback": "lucide-extended:engine-duotone",
	});
}

export default Component;
