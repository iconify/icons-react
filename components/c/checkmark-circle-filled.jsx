import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w34638bac.css';
import '../../css/h/hpwin5a9e.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGDym2MdCl"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="w34638bac"/><path class="hpwin5a9e"/></g></mask></defs><circle mask="url(#SVGDym2MdCl)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:checkmark-circle-filled",
	});
}

export default Component;
