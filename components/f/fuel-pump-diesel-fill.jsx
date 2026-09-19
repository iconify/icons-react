import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jfxlifb-j.css';
import '../../css/i/i6rs8pbkd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jfxlifb-j"/><path class="i6rs8pbkd"/></g>`,
		"fallback": "bi:fuel-pump-diesel-fill",
	});
}

export default Component;
