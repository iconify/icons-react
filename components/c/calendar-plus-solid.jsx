import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djpvdqbih.css';
import '../../css/v/vjegeb-cx.css';
import '../../css/x/xfcwl2bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="djpvdqbih"/><path class="vjegeb-cx"/><path class="xfcwl2bpk"/></g>`,
		"fallback": "iconaut:calendar-plus-solid",
	});
}

export default Component;
