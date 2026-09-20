import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n0r0a7bqi.css';
import '../../css/p/pog0si8pj.css';
import '../../css/m/mmhjxdbkm.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n0r0a7bqi"/><path class="pog0si8pj"/><path class="mmhjxdbkm"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-left-circle",
	});
}

export default Component;
