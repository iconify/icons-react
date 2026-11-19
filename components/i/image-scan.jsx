import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-goxttel.css';
import '../../css/y/y5q2uuoxo.css';
import '../../css/j/j8fadmb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-goxttel"/><path class="y5q2uuoxo"/><path clip-rule="evenodd" class="j8fadmb6a"/></g>`,
		"fallback": "andrsrxn:image-scan",
	});
}

export default Component;
