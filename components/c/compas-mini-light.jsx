import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/eazw51owu.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="eazw51owu"/><circle class="ons53cb4g"/></g>`,
		"fallback": "lets-icons:compas-mini-light",
	});
}

export default Component;
