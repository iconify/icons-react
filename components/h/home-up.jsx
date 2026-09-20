import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt_hf2bra.css';
import '../../css/n/n982v5bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pt_hf2bra"/><path class="n982v5bwd"/></g>`,
		"fallback": "tabler:home-up",
	});
}

export default Component;
