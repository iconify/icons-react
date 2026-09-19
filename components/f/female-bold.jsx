import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuwoy268i.css';
import '../../css/y/yyqzombkp.css';
import '../../css/j/jw6m5iv8c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cuwoy268i"/><path class="yyqzombkp"/><path class="jw6m5iv8c"/></g>`,
		"fallback": "glyphs:female-bold",
	});
}

export default Component;
