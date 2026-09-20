import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvn4_6iaj.css';
import '../../css/r/rr1ygbacx.css';
import '../../css/o/oh-ffpj9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fvn4_6iaj"/><path class="rr1ygbacx"/><path class="oh-ffpj9g"/></g>`,
		"fallback": "solar:align-left-linear",
	});
}

export default Component;
