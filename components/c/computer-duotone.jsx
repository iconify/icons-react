import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du9_k7b_y.css';
import '../../css/q/q-msjrbpt.css';
import '../../css/g/gobbshbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="du9_k7b_y"/><path class="q-msjrbpt"/><path class="gobbshbnw"/></g>`,
		"fallback": "lucide-extended:computer-duotone",
	});
}

export default Component;
