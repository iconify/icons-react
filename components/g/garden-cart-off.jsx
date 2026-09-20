import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rsw7b_xib.css';
import '../../css/h/hia3kdbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rsw7b_xib"/><path class="hia3kdbnn"/></g>`,
		"fallback": "tabler:garden-cart-off",
	});
}

export default Component;
