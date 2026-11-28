import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wm3opxgek.css';
import '../../css/g/g1qwchbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wm3opxgek"/><path class="g1qwchbyt primary"/></g>`,
		"fallback": "iconaut:bathtub-duotone",
	});
}

export default Component;
