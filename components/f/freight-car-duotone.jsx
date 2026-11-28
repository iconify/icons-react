import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2uqivofl.css';
import '../../css/b/b06wt7enl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2uqivofl secondary"/><path class="b06wt7enl primary"/></g>`,
		"fallback": "iconaut:freight-car-duotone",
	});
}

export default Component;
