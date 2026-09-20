import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlryp1yvy.css';
import '../../css/r/r7x3jcbmt.css';
import '../../css/w/wyq0_0bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qlryp1yvy"/><path class="r7x3jcbmt"/><path class="wyq0_0bpj"/></g>`,
		"fallback": "reicon:atom-duotone",
	});
}

export default Component;
