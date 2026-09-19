import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c97hp8b9o.css';
import '../../css/u/unr_8tk5x.css';
import '../../css/a/apilembcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c97hp8b9o"/><path class="unr_8tk5x"/><path class="apilembcw"/></g>`,
		"fallback": "hugeicons:book-up-2",
	});
}

export default Component;
