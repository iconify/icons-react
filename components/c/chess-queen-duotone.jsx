import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ms8h6zb9e.css';
import '../../css/q/qhfur2bdl.css';
import '../../css/b/bw3ufyb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ms8h6zb9e"/><path class="qhfur2bdl"/><path class="bw3ufyb3p"/></g>`,
		"fallback": "lucide-extended:chess-queen-duotone",
	});
}

export default Component;
