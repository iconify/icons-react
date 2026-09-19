import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h754ff_bs.css';
import '../../css/t/tjznz3bqe.css';
import '../../css/u/uzt_qbcfs.css';
import '../../css/v/vfrwuab3k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h754ff_bs"/><path class="tjznz3bqe"/><path class="uzt_qbcfs"/><path class="vfrwuab3k"/></g>`,
		"fallback": "glyphs:building-2-outline",
	});
}

export default Component;
