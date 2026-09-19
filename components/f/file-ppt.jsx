import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hk-49hb0i.css';
import '../../css/t/t20707b2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hk-49hb0i"/><path class="t20707b2l"/></g>`,
		"fallback": "bi:file-ppt",
	});
}

export default Component;
