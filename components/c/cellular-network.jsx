import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ophjqrt4l.css';
import '../../css/e/euedu3ulz.css';
import '../../css/q/q-hojtojq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ophjqrt4l"/><path class="euedu3ulz"/><path class="q-hojtojq"/></g>`,
		"fallback": "hugeicons:cellular-network",
	});
}

export default Component;
