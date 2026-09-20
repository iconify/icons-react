import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmx7zv9mo.css';
import '../../css/g/gl7lfcd0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmx7zv9mo"/><path class="gl7lfcd0x"/></g>`,
		"fallback": "reicon:bag-heart-duotone",
	});
}

export default Component;
