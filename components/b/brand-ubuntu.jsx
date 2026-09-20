import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-747lbuo.css';
import '../../css/c/c842s0bva.css';
import '../../css/j/jo9weebwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-747lbuo"/><path class="c842s0bva"/><path class="jo9weebwl"/></g>`,
		"fallback": "tabler:brand-ubuntu",
	});
}

export default Component;
