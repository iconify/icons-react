import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3p9p4b1e.css';
import '../../css/q/qo-cleo8d.css';
import '../../css/d/dhq-fdcki.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsICertificatePaperNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="c3p9p4b1e"/><path class="qo-cleo8d"/><path clip-rule="evenodd" class="dhq-fdcki"/></g><defs><clipPath id="healthiconsICertificatePaperNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:i-certificate-paper-negative",
	});
}

export default Component;
