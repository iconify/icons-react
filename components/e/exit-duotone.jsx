import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ye4mivb1b.css';
import '../../css/a/aw2er9b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ye4mivb1b"/><path clip-rule="evenodd" class="aw2er9b4a"/></g>`,
		"fallback": "reicon:exit-duotone",
	});
}

export default Component;
