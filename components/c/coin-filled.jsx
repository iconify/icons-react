import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ut32ur4ud.css';
import '../../css/b/b17u35b3a.css';
import '../../css/o/o8qkkzbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ut32ur4ud"/><path class="b17u35b3a"/><path class="o8qkkzbki"/></g>`,
		"fallback": "reicon:coin-filled",
	});
}

export default Component;
