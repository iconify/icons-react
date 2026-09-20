import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k_pwaj2wn.css';
import '../../css/o/oj1fgu0we.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k_pwaj2wn"/><path class="oj1fgu0we"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:house-circle",
	});
}

export default Component;
