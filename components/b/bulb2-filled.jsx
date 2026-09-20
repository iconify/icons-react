import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/prr2jjbht.css';
import '../../css/g/gjvtk9e-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="prr2jjbht"/><path class="gjvtk9e-b"/></g>`,
		"fallback": "reicon:bulb2-filled",
	});
}

export default Component;
