import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dm-oiia4i.css';
import '../../css/v/vhftcbbde.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAnimalCowNegative0)" class="cuyn6tgcc"><path class="dm-oiia4i"/><path clip-rule="evenodd" class="vhftcbbde"/></g><defs><clipPath id="healthiconsAnimalCowNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:animal-cow-negative",
	});
}

export default Component;
