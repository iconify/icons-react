import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2vahqbfy.css';
import '../../css/z/z7adtab3q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i2vahqbfy"/><path class="z7adtab3q"/></g>`,
		"fallback": "heroicons:briefcase-20-solid",
	});
}

export default Component;
