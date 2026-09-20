import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mvxxrqsyf.css';
import '../../css/c/cipwg757n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mvxxrqsyf"/><path clip-rule="evenodd" class="cipwg757n"/></g>`,
		"fallback": "reicon:cloud-up",
	});
}

export default Component;
