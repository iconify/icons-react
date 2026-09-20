import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/p/p46q27biy.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGQCgdwbnB"><path class="k5-vjlrin"/><path class="p46q27biy"/></mask></defs><circle mask="url(#SVGQCgdwbnB)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:dots-x-circle-filled",
	});
}

export default Component;
