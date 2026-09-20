import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9fy4wczv.css';
import '../../css/k/k5xzmd8wb.css';
import '../../css/a/awo1ve8ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z9fy4wczv"/><path clip-rule="evenodd" class="k5xzmd8wb"/><path class="awo1ve8ww"/></g>`,
		"fallback": "reicon:cart4-duotone",
	});
}

export default Component;
