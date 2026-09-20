import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lzea9cggi.css';
import '../../css/c/cw5fmb0dv.css';
import '../../css/c/caeqb-r8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lzea9cggi"/><path class="cw5fmb0dv"/><path class="caeqb-r8q"/></g>`,
		"fallback": "streamline-freehand:broken-smartphone-1",
	});
}

export default Component;
