import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuph7j88c.css';
import '../../css/f/fi8powr_a.css';
import '../../css/a/a6i72jxlq.css';
import '../../css/s/s7sj4-baj.css';
import '../../css/y/yf9jrjbza.css';
import '../../css/b/bc3adfcim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cuph7j88c"/><path class="fi8powr_a"/><path clip-rule="evenodd" class="a6i72jxlq"/><path class="s7sj4-baj"/><path class="yf9jrjbza"/><path class="bc3adfcim"/></g>`,
		"fallback": "solar:conditioner-outline",
	});
}

export default Component;
