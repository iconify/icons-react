import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m09vm57lq.css';
import '../../css/p/pt_hf2bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m09vm57lq"/><path class="pt_hf2bra"/></g>`,
		"fallback": "tabler:home-dot",
	});
}

export default Component;
