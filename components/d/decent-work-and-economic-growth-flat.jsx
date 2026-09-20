import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hrkk-ojzk.css';
import '../../css/v/vkeso3bgp.css';
import '../../css/v/vi1s4bwnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hrkk-ojzk"/><path class="vkeso3bgp"/><path class="vi1s4bwnk"/></g>`,
		"fallback": "streamline-flex-color:decent-work-and-economic-growth-flat",
	});
}

export default Component;
