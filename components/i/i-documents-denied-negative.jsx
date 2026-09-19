import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg_n6i7ad.css';
import '../../css/b/b1dx1_bya.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIDocumentsDeniedNegative0)" class="cuyn6tgcc"><path class="gg_n6i7ad"/><path clip-rule="evenodd" class="b1dx1_bya"/></g><defs><clipPath id="healthiconsIDocumentsDeniedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:i-documents-denied-negative",
	});
}

export default Component;
