import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbm5ejlhj.css';
import '../../css/p/p598gbcpi.css';
import '../../css/h/h38drbc1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbm5ejlhj"/><path class="p598gbcpi"/><path class="h38drbc1w"/></g>`,
		"fallback": "pixelarticons:heading",
	});
}

export default Component;
