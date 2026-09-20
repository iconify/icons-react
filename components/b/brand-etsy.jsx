import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5vxz2beq.css';
import '../../css/x/xu6a1whct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p5vxz2beq"/><path class="xu6a1whct"/></g>`,
		"fallback": "tabler:brand-etsy",
	});
}

export default Component;
