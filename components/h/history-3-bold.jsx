import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ea2d71bzx.css';
import '../../css/l/l7ln3fn_r.css';
import '../../css/a/a3t744bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ea2d71bzx"/><path class="l7ln3fn_r"/><path class="a3t744bof"/></g>`,
		"fallback": "solar:history-3-bold",
	});
}

export default Component;
