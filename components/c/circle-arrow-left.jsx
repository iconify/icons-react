import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/g4z8pwbhj.css';
import '../../css/l/l3-7g0o7n.css';
import '../../css/y/yiws--bkt.css';
import '../../css/o/oh---cbyh.css';
import '../../css/s/sqao3vs_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="g4z8pwbhj"/><path class="l3-7g0o7n"/><path class="yiws--bkt"/><path class="oh---cbyh"/><path class="sqao3vs_y"/></g>`,
		"fallback": "withicons-retro:circle-arrow-left",
	});
}

export default Component;
