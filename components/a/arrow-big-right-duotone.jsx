import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chxdzgcxn.css';
import '../../css/m/m4dlgnxkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chxdzgcxn"/><path class="m4dlgnxkn"/></g>`,
		"fallback": "lucide-extended:arrow-big-right-duotone",
	});
}

export default Component;
