import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ax1etbbqz.css';
import '../../css/w/wjp0nj1di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ax1etbbqz"/><path class="wjp0nj1di"/></g>`,
		"fallback": "feather:file-plus",
	});
}

export default Component;
