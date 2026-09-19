import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/maeqr4s2c.css';
import '../../css/b/bw3q8ht0l.css';
import '../../css/i/ijw3xziot.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="maeqr4s2c"/><path class="bw3q8ht0l"/><path class="ijw3xziot"/></g>`,
		"fallback": "heroicons-solid:finger-print",
	});
}

export default Component;
