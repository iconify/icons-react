import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/an9vyk68l.css';
import '../../css/b/bh3--jb0r.css';
import '../../css/k/k86tlqb7u.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHormonalRingNegative0)" class="cuyn6tgcc"><path class="an9vyk68l"/><path clip-rule="evenodd" class="bh3--jb0r"/><path clip-rule="evenodd" class="k86tlqb7u"/></g><defs><clipPath id="healthiconsHormonalRingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:hormonal-ring-negative",
	});
}

export default Component;
