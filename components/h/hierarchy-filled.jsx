import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzso8jb5f.css';
import '../../css/q/q6f64fm6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzso8jb5f"/><path class="q6f64fm6j"/></g>`,
		"fallback": "reicon:hierarchy-filled",
	});
}

export default Component;
