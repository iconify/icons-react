import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vxaldzbwo.css';
import '../../css/b/bor6m379i.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAllergiesNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="vxaldzbwo"/><path class="bor6m379i"/></g><defs><clipPath id="healthiconsAllergiesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:allergies-negative",
	});
}

export default Component;
