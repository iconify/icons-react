import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9lmaabmr.css';
import '../../css/b/bndj564er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b9lmaabmr"/><path class="bndj564er"/></g>`,
		"fallback": "mynaui:brand-youtube",
	});
}

export default Component;
