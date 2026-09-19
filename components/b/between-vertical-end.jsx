import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzk21sb_g.css';
import '../../css/r/r2rqgnbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nzk21sb_g"/><path class="r2rqgnbmb"/></g>`,
		"fallback": "hugeicons:between-vertical-end",
	});
}

export default Component;
