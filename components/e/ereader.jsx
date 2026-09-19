import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sih0xub7d.css';
import '../../css/o/obo9tkbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sih0xub7d"/><path clip-rule="evenodd" class="obo9tkbdi"/></g>`,
		"fallback": "gg:ereader",
	});
}

export default Component;
