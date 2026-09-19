import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bq26k3a0r.css';
import '../../css/h/h6a_i43_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bq26k3a0r"/><path class="h6a_i43_u"/></g>`,
		"fallback": "hugeicons:catalogue",
	});
}

export default Component;
