import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/u/u6vs5hb8b.css';
import '../../css/w/wuohpobou.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGYzetObbO"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="u6vs5hb8b"/><path class="wuohpobou"/></g></mask></defs><circle mask="url(#SVGYzetObbO)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:hamburger-circle-filled",
	});
}

export default Component;
