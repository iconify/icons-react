import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bih7l_bhr.css';
import '../../css/o/od7_z9bwr.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bih7l_bhr"/><path class="od7_z9bwr"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:comet-circle",
	});
}

export default Component;
