import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t9t9-0big.css';
import '../../css/n/n7w-9xj0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t9t9-0big"/><path class="n7w-9xj0y"/></g>`,
		"fallback": "tabler:contract",
	});
}

export default Component;
