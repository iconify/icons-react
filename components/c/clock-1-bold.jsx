import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jabw4ibfc.css';
import '../../css/m/mepdp3nql.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jabw4ibfc"/><path clip-rule="evenodd" class="mepdp3nql"/></g>`,
		"fallback": "glyphs:clock-1-bold",
	});
}

export default Component;
