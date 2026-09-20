import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecbgk3bsx.css';
import '../../css/a/a28n7l_pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ecbgk3bsx"/><path clip-rule="evenodd" class="a28n7l_pj"/></g>`,
		"fallback": "reicon:bag-music-filled",
	});
}

export default Component;
