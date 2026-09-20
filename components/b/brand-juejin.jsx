import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ubmtuub4q.css';
import '../../css/d/dve_20btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ubmtuub4q"/><path class="dve_20btd"/></g>`,
		"fallback": "tabler:brand-juejin",
	});
}

export default Component;
