import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hxe6apb_t.css';
import '../../css/a/adiuw0bdq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="hxe6apb_t"/><path class="adiuw0bdq"/></g>`,
		"fallback": "cryptocurrency-color:blk",
	});
}

export default Component;
