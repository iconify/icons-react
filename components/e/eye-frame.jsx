import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nworg_q_t.css';
import '../../css/x/xspw_mt-i.css';
import '../../css/e/ecwads5ve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nworg_q_t"/><path class="xspw_mt-i"/><path class="ecwads5ve"/></g>`,
		"fallback": "pepicons:eye-frame",
	});
}

export default Component;
