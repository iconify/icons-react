import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4z8_ccga.css';
import '../../css/v/vpqq9pjjw.css';
import '../../css/b/bwgid6btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4z8_ccga"/><path clip-rule="evenodd" class="vpqq9pjjw"/><path class="bwgid6btj"/></g>`,
		"fallback": "reicon:cloud-sun2-duotone",
	});
}

export default Component;
