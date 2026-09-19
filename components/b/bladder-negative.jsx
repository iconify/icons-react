import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgk3nsj2p.css';
import '../../css/h/ho4qdccuy.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBladderNegative0)" class="cuyn6tgcc"><path class="hgk3nsj2p"/><path clip-rule="evenodd" class="ho4qdccuy"/></g><defs><clipPath id="healthiconsBladderNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:bladder-negative",
	});
}

export default Component;
