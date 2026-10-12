import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ol6l3n84p.css';
import '../../css/n/nzaemzbdu.css';
import '../../css/e/e7jwi8bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ol6l3n84p"/><path class="nzaemzbdu"/><path class="e7jwi8bqs"/></g>`,
		"fallback": "andrsrxn:book-sparkle",
	});
}

export default Component;
