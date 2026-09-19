import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nw5ln_smg.css';
import '../../css/u/uoncq9b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nw5ln_smg"/><path class="uoncq9b4s"/></g>`,
		"fallback": "iconamoon:3d",
	});
}

export default Component;
