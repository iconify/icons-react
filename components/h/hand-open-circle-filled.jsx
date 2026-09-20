import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/s/sv96-vsno.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGj3jNvFLF"><path class="k5-vjlrin"/><path class="sv96-vsno"/></mask></defs><circle mask="url(#SVGj3jNvFLF)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:hand-open-circle-filled",
	});
}

export default Component;
