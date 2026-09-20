import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/o/o0inp7ygl.css';
import '../../css/x/x76r19xwu.css';
import '../../css/c/ckn51cykt.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGjBceYcRX"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="o0inp7ygl"/><path class="x76r19xwu"/><path class="ckn51cykt"/></g></mask></defs><circle mask="url(#SVGjBceYcRX)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:building-circle-filled",
	});
}

export default Component;
