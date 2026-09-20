import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mu3ngubsu.css';
import '../../css/s/ssxz6hw6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mu3ngubsu"/><path class="ssxz6hw6y"/></g>`,
		"fallback": "tabler:brand-vue",
	});
}

export default Component;
