import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/spya73b4x.css';
import '../../css/c/c9v8bbnei.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsDizzyNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="spya73b4x"/><path class="c9v8bbnei"/></g><defs><clipPath id="healthiconsDizzyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:dizzy-negative",
	});
}

export default Component;
