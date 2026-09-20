import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geji5ur7w.css';
import '../../css/t/tke_5wp7o.css';
import '../../css/k/kqzenpjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="geji5ur7w"/><path clip-rule="evenodd" class="tke_5wp7o"/><path clip-rule="evenodd" class="kqzenpjvg"/></g>`,
		"fallback": "reicon:bacteria",
	});
}

export default Component;
