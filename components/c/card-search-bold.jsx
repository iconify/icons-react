import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znogc8yyg.css';
import '../../css/g/gafy37gmj.css';
import '../../css/s/s0c6a526o.css';
import '../../css/t/ty9rd6b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="znogc8yyg"/><path class="gafy37gmj"/><path class="s0c6a526o"/><path class="ty9rd6b5j"/></g>`,
		"fallback": "solar:card-search-bold",
	});
}

export default Component;
