import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukp0h0bby.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/e/e5k5xe6px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ukp0h0bby"/><path class="g4vvtk_cw"/><path class="e5k5xe6px"/></g>`,
		"fallback": "lucide-extended:disc-2-duotone",
	});
}

export default Component;
