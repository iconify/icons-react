import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz7rg2b_o.css';
import '../../css/t/t88vbfbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cz7rg2b_o"/><path class="t88vbfbdv"/></g>`,
		"fallback": "vadivam:cog",
	});
}

export default Component;
