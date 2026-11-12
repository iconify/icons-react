import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gdh8_obja.css';
import '../../css/v/vt6t_xb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gdh8_obja"/><path class="vt6t_xb5g"/></g>`,
		"fallback": "tabler:cash-banknote-search",
	});
}

export default Component;
