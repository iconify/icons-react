import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m9gvb_61p.css';
import '../../css/p/p7ow52smq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m9gvb_61p"/><path class="p7ow52smq"/></g>`,
		"fallback": "hugeicons:brandfetch",
	});
}

export default Component;
