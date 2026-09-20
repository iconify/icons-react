import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqqrg9brl.css';
import '../../css/h/hvl4om_iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iqqrg9brl"/><path clip-rule="evenodd" class="hvl4om_iq"/></g>`,
		"fallback": "reicon:envelope-open-filled",
	});
}

export default Component;
