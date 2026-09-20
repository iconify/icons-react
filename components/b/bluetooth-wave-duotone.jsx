import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n0gc8jbdr.css';
import '../../css/r/rd-rd7bad.css';
import '../../css/b/bccuqhbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n0gc8jbdr"/><path class="rd-rd7bad"/><path class="bccuqhbvq"/></g>`,
		"fallback": "reicon:bluetooth-wave-duotone",
	});
}

export default Component;
