import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ibcu5abds.css';
import '../../css/s/s0lw4ybvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ibcu5abds"/><path class="s0lw4ybvr"/></g>`,
		"fallback": "tabler:id-badge",
	});
}

export default Component;
