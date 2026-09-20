import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/n/ni50ofboa.css';
import '../../css/l/luxlqfrxi.css';
import '../../css/v/v56dgzb1x.css';
import '../../css/e/e1lspva1l.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g transform="translate(3 3)"><circle class="ni50ofboa"/><path class="luxlqfrxi"/><path class="v56dgzb1x"/><path class="e1lspva1l"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:arrow-spin-circle",
	});
}

export default Component;
