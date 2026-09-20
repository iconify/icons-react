import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo_l9zrur.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mjqsc3bcv.css';
import '../../css/a/as1-0ybuo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yo_l9zrur"/><g class="ij2x_72vy"><path class="mjqsc3bcv"/><circle class="as1-0ybuo"/></g>`,
		"fallback": "openmoji:add-button",
	});
}

export default Component;
