import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcize2b6m.css';
import '../../css/j/jaamzibxs.css';
import '../../css/b/bqdcxhbpg.css';

const viewBox = {"width":301,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vcize2b6m"/><path class="jaamzibxs"/><path class="bqdcxhbpg"/></g>`,
		"fallback": "cif:cd",
	});
}

export default Component;
