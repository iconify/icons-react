import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1c-mfbek.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ub4u4kwda.css';
import '../../css/y/ys-_x32cm.css';
import '../../css/o/o6vihjm2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z1c-mfbek"/><g class="dt0cm9dhy primary"><path class="ub4u4kwda"/><path class="ys-_x32cm"/><path class="o6vihjm2z"/></g>`,
		"fallback": "iconaut:curtains-duo",
	});
}

export default Component;
