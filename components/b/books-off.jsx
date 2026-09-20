import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2zl4tlgl.css';
import '../../css/r/ro8mhvb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o2zl4tlgl"/><path class="ro8mhvb_i"/></g>`,
		"fallback": "tabler:books-off",
	});
}

export default Component;
