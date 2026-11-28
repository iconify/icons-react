import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jhp_8dvee.css';
import '../../css/p/poc96vbvv.css';
import '../../css/h/hmzwl423c.css';
import '../../css/z/zqvxhszyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jhp_8dvee"/><path class="poc96vbvv"/><path class="hmzwl423c"/><path class="zqvxhszyg"/></g>`,
		"fallback": "iconaut:cloud-sun-lightning",
	});
}

export default Component;
