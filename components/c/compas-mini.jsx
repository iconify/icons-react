import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/eazw51owu.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="eazw51owu"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "lets-icons:compas-mini",
	});
}

export default Component;
