import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x0c9_4bxl.css';
import '../../css/j/j1fclisuo.css';
import '../../css/y/yx6546bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x0c9_4bxl"/><path class="j1fclisuo"/><path class="yx6546bzc"/></g>`,
		"fallback": "solar:file-stack-linear",
	});
}

export default Component;
