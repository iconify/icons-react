import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/y/ye1eq_b_x.css';
import '../../css/h/hgs1qwcgh.css';
import '../../css/p/pskyl3w2k.css';
import '../../css/o/oh---cbyh.css';
import '../../css/m/mbv1kacka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="ye1eq_b_x"/><path class="hgs1qwcgh"/><path class="pskyl3w2k"/><path class="oh---cbyh"/><path class="mbv1kacka"/></g>`,
		"fallback": "withicons-retro:circle-arrow-right",
	});
}

export default Component;
