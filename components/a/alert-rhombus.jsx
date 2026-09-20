import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z770qubut.css';
import '../../css/f/fjjtewbdp.css';
import '../../css/h/h5_h89bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z770qubut"/><path class="fjjtewbdp"/><circle transform="matrix(1 0 0 -1 10.75 17.06)" class="h5_h89bsj"/></g>`,
		"fallback": "proicons:alert-rhombus",
	});
}

export default Component;
