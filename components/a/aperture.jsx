import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/k/khff3selz.css';
import '../../css/w/wbfc3jbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="khff3selz"/><path class="wbfc3jbln"/></g>`,
		"fallback": "hugeicons:aperture",
	});
}

export default Component;
