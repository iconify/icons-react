import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a8nbixmrq.css';
import '../../css/c/cqu3f88yd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="a8nbixmrq"/><path class="cqu3f88yd"/></g>`,
		"fallback": "cryptocurrency-color:elf",
	});
}

export default Component;
