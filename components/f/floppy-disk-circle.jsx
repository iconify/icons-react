import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/ji70fypkw.css';
import '../../css/g/gjqc3fiet.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ji70fypkw"/><path class="gjqc3fiet"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:floppy-disk-circle",
	});
}

export default Component;
