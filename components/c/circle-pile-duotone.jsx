import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1--2lb5l.css';
import '../../css/j/j6vygwbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1--2lb5l"/><path class="j6vygwbnj"/></g>`,
		"fallback": "lucide-extended:circle-pile-duotone",
	});
}

export default Component;
