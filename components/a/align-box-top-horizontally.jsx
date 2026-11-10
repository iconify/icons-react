import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li6c56bwm.css';
import '../../css/n/nhid2ipbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="li6c56bwm"/><path class="nhid2ipbs"/></g>`,
		"fallback": "andrsrxn:align-box-top-horizontally",
	});
}

export default Component;
