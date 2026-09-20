import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkk71-8nz.css';
import '../../css/e/e0_2iebpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nkk71-8nz"/><path clip-rule="evenodd" class="e0_2iebpk"/></g>`,
		"fallback": "reicon:cabinet",
	});
}

export default Component;
