import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glaiyevei.css';
import '../../css/r/ricw71bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="glaiyevei"/><path class="ricw71bio"/></g>`,
		"fallback": "healthicons:coughing-alt-outline-24px",
	});
}

export default Component;
