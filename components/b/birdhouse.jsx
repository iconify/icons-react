import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvrpynbra.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/b/bz2jhm_od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zvrpynbra"/><circle class="rs-d_y_0o"/><path class="bz2jhm_od"/></g>`,
		"fallback": "hugeicons:birdhouse",
	});
}

export default Component;
