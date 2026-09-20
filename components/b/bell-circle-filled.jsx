import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/u/uz6n8fgjv.css';
import '../../css/t/t-g9ozbrz.css';
import '../../css/i/iu1-c9-ga.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGDIMVZcwV"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="uz6n8fgjv"/><path clip-rule="evenodd" class="t-g9ozbrz"/><path class="iu1-c9-ga"/></g></mask></defs><circle mask="url(#SVGDIMVZcwV)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:bell-circle-filled",
	});
}

export default Component;
