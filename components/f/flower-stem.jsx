import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8q_fbb1o.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/c/cpgu-6bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f8q_fbb1o"/><circle class="ptvu1u_4n"/><path class="cpgu-6bro"/></g>`,
		"fallback": "lucide-lab:flower-stem",
	});
}

export default Component;
