import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m71trac1c.css';
import '../../css/o/ocri1_tge.css';
import '../../css/o/oqn1-4bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m71trac1c"/><path class="ocri1_tge"/><path clip-rule="evenodd" class="oqn1-4bbh"/></g>`,
		"fallback": "lucide-extended:cpu-duotone",
	});
}

export default Component;
