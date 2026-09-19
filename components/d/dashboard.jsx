import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fp5szcbjl.css';
import '../../css/u/uu4naqb6f.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fp5szcbjl"/><path class="uu4naqb6f"/></g>`,
		"fallback": "si-glyph:dashboard",
	});
}

export default Component;
