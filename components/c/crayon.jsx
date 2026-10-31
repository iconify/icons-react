import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u010d9bcd.css';
import '../../css/p/pbarkg7pc.css';
import '../../css/s/sal31b4vw.css';
import '../../css/p/px36brfik.css';
import '../../css/c/c2ss5ondi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u010d9bcd wm-shadow"/><path class="pbarkg7pc"/><path class="sal31b4vw"/><path class="px36brfik"/><path class="c2ss5ondi"/></g>`,
		"fallback": "withicons-retro:crayon",
	});
}

export default Component;
