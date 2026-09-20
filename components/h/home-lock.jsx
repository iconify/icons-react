import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/po8f5pbax.css';
import '../../css/o/o30whc3oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="po8f5pbax"/><path class="o30whc3oo"/></g>`,
		"fallback": "tabler:home-lock",
	});
}

export default Component;
