import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-vmr5b3d.css';
import '../../css/h/hskdcdbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-vmr5b3d"/><path clip-rule="evenodd" class="hskdcdbzv"/></g>`,
		"fallback": "gg:girl",
	});
}

export default Component;
