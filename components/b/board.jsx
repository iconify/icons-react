import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_d_8nbmf.css';
import '../../css/u/uztqe6brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_d_8nbmf"/><path class="uztqe6brp"/></g>`,
		"fallback": "proicons:board",
	});
}

export default Component;
