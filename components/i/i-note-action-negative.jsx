import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bg3v29b8u.css';
import '../../css/n/nhdmkwpcm.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsINoteActionNegative0)" class="cuyn6tgcc"><path class="bg3v29b8u"/><path clip-rule="evenodd" class="nhdmkwpcm"/></g><defs><clipPath id="healthiconsINoteActionNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:i-note-action-negative",
	});
}

export default Component;
