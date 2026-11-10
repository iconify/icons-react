import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogwjtfl9h.css';
import '../../css/l/l6f9wtblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogwjtfl9h"/><path clip-rule="evenodd" class="l6f9wtblo"/></g>`,
		"fallback": "andrsrxn:folder-scan",
	});
}

export default Component;
