import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/ts5anevge.css';
import '../../css/r/r0eias71k.css';
import '../../css/w/wqthkk89l.css';

const viewBox = {"width":88,"height":88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ts5anevge"/><path class="r0eias71k"/><path class="wqthkk89l"/></g>`,
		"fallback": "glyphs-poly:chart-donut",
	});
}

export default Component;
