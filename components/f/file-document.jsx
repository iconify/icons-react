import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_i8bqbzk.css';
import '../../css/p/pqgouud7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f_i8bqbzk"/><path clip-rule="evenodd" class="pqgouud7z"/></g>`,
		"fallback": "gg:file-document",
	});
}

export default Component;
