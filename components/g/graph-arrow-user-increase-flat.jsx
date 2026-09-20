import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/neb-6ibuu.css';
import '../../css/a/aztfelb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="neb-6ibuu"/><path clip-rule="evenodd" class="aztfelb7x"/></g>`,
		"fallback": "streamline-sharp-color:graph-arrow-user-increase-flat",
	});
}

export default Component;
