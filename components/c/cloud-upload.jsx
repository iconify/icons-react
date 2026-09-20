import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cjzp_bc2p.css';
import '../../css/d/dtuajbe-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cjzp_bc2p"/><path class="dtuajbe-z"/></g>`,
		"fallback": "tabler:cloud-upload",
	});
}

export default Component;
