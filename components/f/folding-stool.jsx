import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dw47yel7y.css';
import '../../css/g/g6an5ei9s.css';
import '../../css/u/u_8_gxjut.css';
import '../../css/l/lva1h7g9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dw47yel7y"/><path class="g6an5ei9s"/><path class="u_8_gxjut"/><path class="lva1h7g9t"/></g>`,
		"fallback": "pepicons-pencil:folding-stool",
	});
}

export default Component;
