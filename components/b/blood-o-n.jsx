import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h4fyadbly.css';
import '../../css/y/yghz7cc0o.css';
import '../../css/b/bl595ebnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h4fyadbly"/><path class="yghz7cc0o"/><path clip-rule="evenodd" class="bl595ebnf"/></g>`,
		"fallback": "healthicons:blood-o-n",
	});
}

export default Component;
