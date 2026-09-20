import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lj0iy4i-g.css';
import '../../css/h/hnjb5cc-x.css';
import '../../css/t/tl5b25pto.css';
import '../../css/x/xns9qbd-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lj0iy4i-g"/><path class="hnjb5cc-x"/><path class="tl5b25pto"/><path class="xns9qbd-b"/></g>`,
		"fallback": "streamline-freehand:file-code",
	});
}

export default Component;
