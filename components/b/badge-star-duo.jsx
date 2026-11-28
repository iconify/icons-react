import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djhm11b9z.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/x/xeq28t4zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djhm11b9z secondary"/><g class="dt0cm9dhy primary"><path class="l4--ovbba"/><path class="xeq28t4zp"/></g>`,
		"fallback": "iconaut:badge-star-duo",
	});
}

export default Component;
