import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s46ygrnje.css';
import '../../css/u/u0z2embtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s46ygrnje"/><path class="u0z2embtx"/></g>`,
		"fallback": "lucide-extended:battery-medium-duotone",
	});
}

export default Component;
