import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nthjmu6qu.css';
import '../../css/f/fb8kuob6c.css';
import '../../css/e/e4yz11bdb.css';
import '../../css/c/c2wwedy2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nthjmu6qu"/><path class="fb8kuob6c"/><path class="e4yz11bdb"/><path class="c2wwedy2m"/></g>`,
		"fallback": "andrsrxn:field-number",
	});
}

export default Component;
