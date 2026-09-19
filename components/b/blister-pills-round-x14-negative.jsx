import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mud0sebky.css';
import '../../css/x/xgpm64bcj.css';
import '../../css/c/clwzj6bfo.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBlisterPillsRoundX14Negative0)" class="cuyn6tgcc"><path class="mud0sebky"/><path clip-rule="evenodd" class="xgpm64bcj"/><path class="clwzj6bfo"/></g><defs><clipPath id="healthiconsBlisterPillsRoundX14Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:blister-pills-round-x14-negative",
	});
}

export default Component;
