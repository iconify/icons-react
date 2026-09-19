import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hsibv_iva.css';
import '../../css/d/dzsri3-lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hsibv_iva"/><circle class="dzsri3-lf"/></g>`,
		"fallback": "humbleicons:exclamation",
	});
}

export default Component;
