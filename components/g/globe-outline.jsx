import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ira41xb9p.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/p/pljtn-4ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><ellipse class="ira41xb9p"/><circle class="hwsal5q-o"/><path class="pljtn-4ly"/></g>`,
		"fallback": "bitcoin-icons:globe-outline",
	});
}

export default Component;
