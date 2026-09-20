import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqs0atdne.css';
import '../../css/w/wo38oij0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sqs0atdne"/><path class="wo38oij0k"/></g>`,
		"fallback": "reicon:file-check-duotone",
	});
}

export default Component;
