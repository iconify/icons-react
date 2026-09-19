import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tgwo95v5y.css';
import '../../css/b/bvegeppnc.css';
import '../../css/s/sxbf-9b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tgwo95v5y"/><path class="bvegeppnc"/><path class="sxbf-9b_o"/></g>`,
		"fallback": "hugeicons:cardigan",
	});
}

export default Component;
