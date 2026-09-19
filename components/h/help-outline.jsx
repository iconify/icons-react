import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxfyl1b5k.css';
import '../../css/e/ewzk12bfc.css';
import '../../css/l/lkta0p-5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="help-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="oxfyl1b5k"/><path class="ewzk12bfc"/><path clip-rule="evenodd" class="lkta0p-5n"/></g></g>`,
		"fallback": "cuida:help-outline",
	});
}

export default Component;
