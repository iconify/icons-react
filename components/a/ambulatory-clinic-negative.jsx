import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1tgnev_z.css';
import '../../css/h/hgjtjbt2w.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAmbulatoryClinicNegative0)" class="cuyn6tgcc"><path class="s1tgnev_z"/><path clip-rule="evenodd" class="hgjtjbt2w"/></g><defs><clipPath id="healthiconsAmbulatoryClinicNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ambulatory-clinic-negative",
	});
}

export default Component;
