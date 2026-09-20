import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yw5ok4b2o.css';
import '../../css/m/mpbaxv_5q.css';
import '../../css/b/b_e_-iblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yw5ok4b2o"/><circle class="mpbaxv_5q"/><path class="b_e_-iblx"/></g>`,
		"fallback": "reicon:gaming-buttons",
	});
}

export default Component;
