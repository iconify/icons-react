import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a0ad3xbzg.css';
import '../../css/f/fov55i33z.css';
import '../../css/f/fcjq_rbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a0ad3xbzg"/><path class="fov55i33z"/><path class="fcjq_rbcg"/></g>`,
		"fallback": "tabler:brand-parsinta",
	});
}

export default Component;
