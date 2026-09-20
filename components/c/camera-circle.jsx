import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/my3cj9b3w.css';
import '../../css/c/csed3cbwq.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="my3cj9b3w"/><path class="csed3cbwq"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:camera-circle",
	});
}

export default Component;
