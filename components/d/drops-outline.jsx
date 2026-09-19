import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/otizujbvg.css';
import '../../css/d/dmbuntb5b.css';
import '../../css/g/gxh6gnbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="otizujbvg"/><path class="dmbuntb5b"/><path class="gxh6gnbgw"/></g>`,
		"fallback": "bitcoin-icons:drops-outline",
	});
}

export default Component;
