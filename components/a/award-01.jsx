import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d2uj54b6n.css';
import '../../css/r/rkyv0zbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d2uj54b6n"/><path class="rkyv0zbjs"/></g>`,
		"fallback": "hugeicons:award-01",
	});
}

export default Component;
