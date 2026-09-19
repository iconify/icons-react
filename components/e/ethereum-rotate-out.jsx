import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pao9cab5l.css';
import '../../css/u/uuj-dyb-z.css';
import '../../css/j/j4om64bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pao9cab5l"/><path class="uuj-dyb-z"/><path class="j4om64bgz"/></g>`,
		"fallback": "iconoir:ethereum-rotate-out",
	});
}

export default Component;
