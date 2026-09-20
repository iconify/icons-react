import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/le2xeyb8c.css';
import '../../css/e/ewiisvbxm.css';
import '../../css/s/s7qktox6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="le2xeyb8c"/><path class="ewiisvbxm"/><path class="s7qktox6d"/></g>`,
		"fallback": "mynaui:book-image",
	});
}

export default Component;
