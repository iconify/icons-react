import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frubxol3s.css';
import '../../css/z/zow1l6brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="frubxol3s"/><path class="zow1l6brd"/></g>`,
		"fallback": "lucide-extended:drone-duotone",
	});
}

export default Component;
