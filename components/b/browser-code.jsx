import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oyf_e_4gw.css';
import '../../css/b/bva95q5lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oyf_e_4gw"/><path clip-rule="evenodd" class="bva95q5lf"/></g>`,
		"fallback": "reicon:browser-code",
	});
}

export default Component;
