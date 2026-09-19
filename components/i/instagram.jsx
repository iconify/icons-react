import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8dfhpbfn.css';
import '../../css/x/x89edcbli.css';
import '../../css/g/gjxb9oblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g8dfhpbfn"/><path class="x89edcbli"/><path clip-rule="evenodd" class="gjxb9oblr"/></g>`,
		"fallback": "gg:instagram",
	});
}

export default Component;
