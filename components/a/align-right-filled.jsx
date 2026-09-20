import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tcfo_4b0j.css';
import '../../css/m/ms9-v9bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tcfo_4b0j"/><path class="ms9-v9bly"/></g>`,
		"fallback": "reicon:align-right-filled",
	});
}

export default Component;
