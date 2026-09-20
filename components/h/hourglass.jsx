import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k31rhvb-i.css';
import '../../css/f/fajscxb_a.css';
import '../../css/j/js0l-1vgk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k31rhvb-i"/><path class="fajscxb_a"/><path class="js0l-1vgk"/></g>`,
		"fallback": "pepicons-pencil:hourglass",
	});
}

export default Component;
