import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c1zfyqf2c.css';
import '../../css/j/jwbsqab5o.css';
import '../../css/o/oe4-mbpxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c1zfyqf2c"/><path class="jwbsqab5o"/><path class="oe4-mbpxo"/></g>`,
		"fallback": "token:ame-chain",
	});
}

export default Component;
