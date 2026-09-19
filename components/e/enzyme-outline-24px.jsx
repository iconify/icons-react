import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scj6e7j8j.css';
import '../../css/o/obezgrllk.css';
import '../../css/z/zs0uyebvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="scj6e7j8j"/><path class="obezgrllk"/><path clip-rule="evenodd" class="zs0uyebvs"/></g>`,
		"fallback": "healthicons:enzyme-outline-24px",
	});
}

export default Component;
