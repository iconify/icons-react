import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix1-3bpbm.css';
import '../../css/x/x-x2yh7ca.css';
import '../../css/j/jplvnrbiz.css';
import '../../css/v/v4j9fdcfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ix1-3bpbm"/><path class="x-x2yh7ca"/><path class="jplvnrbiz"/><path class="v4j9fdcfu"/></g>`,
		"fallback": "andrsrxn:diploma-check-badge",
	});
}

export default Component;
