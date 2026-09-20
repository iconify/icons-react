import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3ondoz6y.css';
import '../../css/z/zigw2kbcr.css';
import '../../css/v/vn3oyvbre.css';
import '../../css/o/o_0di8bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="o3ondoz6y"/><path class="zigw2kbcr"/><circle class="vn3oyvbre"/><circle class="o_0di8bvq"/></g>`,
		"fallback": "reicon:face-smile2",
	});
}

export default Component;
