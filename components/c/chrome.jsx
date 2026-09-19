import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1bbnfl8v.css';
import '../../css/l/l_rrpccbj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="z1bbnfl8v"/><path class="l_rrpccbj"/>`,
		"fallback": "devicon-plain:chrome",
	});
}

export default Component;
