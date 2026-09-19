import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ax1etbbqz.css';
import '../../css/v/vl50mzftu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ax1etbbqz"/><path class="vl50mzftu"/></g>`,
		"fallback": "feather:file-minus",
	});
}

export default Component;
