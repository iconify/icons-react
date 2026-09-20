import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kq6w5jb1y.css';
import '../../css/z/z3wk1ubeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kq6w5jb1y"/><path class="z3wk1ubeh"/></g>`,
		"fallback": "streamline-freehand:cd-rom-disc-broken",
	});
}

export default Component;
