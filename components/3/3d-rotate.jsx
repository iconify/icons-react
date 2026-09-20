import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qgvby8jhj.css';
import '../../css/f/ft2st5bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qgvby8jhj"/><path class="ft2st5bdv"/></g>`,
		"fallback": "tabler:3d-rotate",
	});
}

export default Component;
