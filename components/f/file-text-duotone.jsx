import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqs0atdne.css';
import '../../css/s/sbtfc7b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sqs0atdne"/><path class="sbtfc7b5n"/></g>`,
		"fallback": "reicon:file-text-duotone",
	});
}

export default Component;
