import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/o/ovk3uccge.css';
import '../../css/k/k0rtyzb9v.css';
import '../../css/z/zefgd9r0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ovk3uccge"/><path class="k0rtyzb9v"/><path class="zefgd9r0c"/></g>`,
		"fallback": "streamline-ultimate:book-cog-2",
	});
}

export default Component;
