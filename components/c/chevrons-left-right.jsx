import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/crpr8ub-k.css';
import '../../css/h/hgpv_bcpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="crpr8ub-k"/><path class="hgpv_bcpe"/></g>`,
		"fallback": "iconaut:chevrons-left-right",
	});
}

export default Component;
