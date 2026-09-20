import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a7blbibjc.css';
import '../../css/k/kqou2tbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a7blbibjc"/><path class="kqou2tbrv"/></g>`,
		"fallback": "reicon:filter-search",
	});
}

export default Component;
