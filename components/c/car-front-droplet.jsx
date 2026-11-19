import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4n02mblg.css';
import '../../css/h/hx8mwgbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v4n02mblg"/><path class="hx8mwgbjl"/></g>`,
		"fallback": "andrsrxn:car-front-droplet",
	});
}

export default Component;
