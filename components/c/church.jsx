import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sn4z76_fv.css';
import '../../css/y/y6ybkrb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sn4z76_fv"/><path class="y6ybkrb0e"/></g>`,
		"fallback": "hugeicons:church",
	});
}

export default Component;
