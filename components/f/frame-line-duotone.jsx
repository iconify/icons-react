import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fg37-14pa.css';
import '../../css/b/beu8enohc.css';
import '../../css/o/oqpf2r_po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fg37-14pa"/><path class="beu8enohc"/><path class="oqpf2r_po"/></g>`,
		"fallback": "solar:frame-line-duotone",
	});
}

export default Component;
