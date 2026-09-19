import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9lvgqbix.css';
import '../../css/z/z5465t_tb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9lvgqbix"/><path class="z5465t_tb"/></g>`,
		"fallback": "devicon-plain:django",
	});
}

export default Component;
