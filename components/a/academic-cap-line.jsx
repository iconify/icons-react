import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu6sdblym.css';
import '../../css/s/stbih-tra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cu6sdblym"/><path class="stbih-tra"/></g>`,
		"fallback": "majesticons:academic-cap-line",
	});
}

export default Component;
