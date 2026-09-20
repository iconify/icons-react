import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nva_u8bor.css';
import '../../css/b/b5ctf1jhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nva_u8bor"/><path class="b5ctf1jhj"/></g>`,
		"fallback": "reicon:bug2-duotone",
	});
}

export default Component;
