import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg9ftqbzy.css';
import '../../css/l/l7ulz1n-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hg9ftqbzy"/><path class="l7ulz1n-d"/></g>`,
		"fallback": "iconaut:crown-solid",
	});
}

export default Component;
