import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilmzrtrhf.css';
import '../../css/d/d2uut2b9d.css';
import '../../css/f/fgxmd2bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ilmzrtrhf"/><path class="d2uut2b9d"/><path class="fgxmd2bte"/></g>`,
		"fallback": "andrsrxn:brain-search",
	});
}

export default Component;
