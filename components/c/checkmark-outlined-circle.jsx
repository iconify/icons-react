import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gjsii3f9x.css';
import '../../css/p/p3aw6_brk.css';
import '../../css/v/v2e3hkb9g.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gjsii3f9x"/><path class="p3aw6_brk"/><path class="v2e3hkb9g"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:checkmark-outlined-circle",
	});
}

export default Component;
