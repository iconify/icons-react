import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cjzp_bc2p.css';
import '../../css/c/cl3hr9byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cjzp_bc2p"/><path class="cl3hr9byt"/></g>`,
		"fallback": "tabler:cloud-storm",
	});
}

export default Component;
