import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cw72pia5d.css';
import '../../css/i/iu8lfsydg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cw72pia5d"/><path clip-rule="evenodd" class="iu8lfsydg"/></g>`,
		"fallback": "reicon:health-duotone",
	});
}

export default Component;
