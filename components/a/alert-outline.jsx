import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxfyl1b5k.css';
import '../../css/u/urqpr_-7e.css';
import '../../css/x/xip7p4b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="alert-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="oxfyl1b5k"/><path clip-rule="evenodd" class="urqpr_-7e"/><path class="xip7p4b3y"/></g></g>`,
		"fallback": "cuida:alert-outline",
	});
}

export default Component;
