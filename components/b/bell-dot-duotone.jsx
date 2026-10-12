import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7ck4yb8l.css';
import '../../css/n/nr9uadclk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7ck4yb8l"/><path class="nr9uadclk"/></g>`,
		"fallback": "lucide-extended:bell-dot-duotone",
	});
}

export default Component;
