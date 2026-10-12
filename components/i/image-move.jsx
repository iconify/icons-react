import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie5wfwbml.css';
import '../../css/t/tbo-pjb6s.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ie5wfwbml"/><path class="tbo-pjb6s"/><path class="k1488cb1l"/></g>`,
		"fallback": "andrsrxn:image-move",
	});
}

export default Component;
