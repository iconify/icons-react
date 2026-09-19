import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bibwjh_uu.css';
import '../../css/u/ucyqogqis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bibwjh_uu"/><path class="ucyqogqis"/></g>`,
		"fallback": "hugeicons:history",
	});
}

export default Component;
