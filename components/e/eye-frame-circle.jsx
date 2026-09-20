import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iov8d5b2r.css';
import '../../css/a/a1zqqilbh.css';
import '../../css/d/d2xxuhd-p.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iov8d5b2r"/><path class="a1zqqilbh"/><path class="d2xxuhd-p"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:eye-frame-circle",
	});
}

export default Component;
