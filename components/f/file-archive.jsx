import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vg631rblq.css';
import '../../css/g/gszrskb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vg631rblq"/><path class="gszrskb4b"/></g>`,
		"fallback": "hugeicons:file-archive",
	});
}

export default Component;
