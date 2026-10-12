import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/to1kaabrt.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/s/sx6ponwtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="to1kaabrt"/><path class="g4vvtk_cw"/><path class="sx6ponwtg"/></g>`,
		"fallback": "lucide-extended:disc-3-duotone",
	});
}

export default Component;
