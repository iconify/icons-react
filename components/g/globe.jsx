import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7wq2nbvt.css';
import '../../css/l/l0r6-odaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h7wq2nbvt"/><path class="l0r6-odaa"/></g>`,
		"fallback": "tabler:globe",
	});
}

export default Component;
