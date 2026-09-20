import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdf5ubb_p.css';
import '../../css/d/dfnqwhboe.css';
import '../../css/l/lx_y9rcby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hdf5ubb_p"/><path clip-rule="evenodd" class="dfnqwhboe"/><path class="lx_y9rcby"/></g>`,
		"fallback": "nrk:clock-alarm",
	});
}

export default Component;
