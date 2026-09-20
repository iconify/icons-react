import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yfpkhjrsu.css';
import '../../css/x/xo1iftloa.css';
import '../../css/h/hk_b0_b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yfpkhjrsu"/><path class="xo1iftloa"/><path class="hk_b0_b-x"/></g>`,
		"fallback": "lucide:hand-platter",
	});
}

export default Component;
