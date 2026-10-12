import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvvgdnsdh.css';
import '../../css/p/ptytt2lzr.css';
import '../../css/i/i00e0bcjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="hvvgdnsdh"/><path class="ptytt2lzr"/><circle class="i00e0bcjs"/></g>`,
		"fallback": "andrsrxn:bounce-right",
	});
}

export default Component;
