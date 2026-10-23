import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t36f-0yld.css';
import '../../css/u/uzoiubtil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t36f-0yld"/><path class="uzoiubtil"/></g>`,
		"fallback": "vadivam:ev-charger",
	});
}

export default Component;
