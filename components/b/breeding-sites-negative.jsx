import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgem26lze.css';
import '../../css/e/etp1bc4hg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBreedingSitesNegative0)" class="cuyn6tgcc"><path class="rgem26lze"/><path clip-rule="evenodd" class="etp1bc4hg"/></g><defs><clipPath id="healthiconsBreedingSitesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:breeding-sites-negative",
	});
}

export default Component;
