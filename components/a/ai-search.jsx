import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ej0y7mbmx.css';
import '../../css/b/blakxjb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ej0y7mbmx"/><path class="blakxjb4n"/></g>`,
		"fallback": "hugeicons:ai-search",
	});
}

export default Component;
