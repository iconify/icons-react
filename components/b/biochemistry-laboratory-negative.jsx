import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp_tf86jr.css';
import '../../css/p/pefn39nwn.css';
import '../../css/t/tr9nw3b9z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBiochemistryLaboratoryNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="zp_tf86jr"/><path class="pefn39nwn"/><path clip-rule="evenodd" class="tr9nw3b9z"/></g><defs><clipPath id="healthiconsBiochemistryLaboratoryNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:biochemistry-laboratory-negative",
	});
}

export default Component;
