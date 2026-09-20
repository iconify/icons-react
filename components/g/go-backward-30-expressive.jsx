import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gox2nnbuj.css';
import '../../css/k/ke5swub4s.css';
import '../../css/h/hyhdymbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gox2nnbuj"/><path class="ke5swub4s"/><path clip-rule="evenodd" class="hyhdymbse"/></g>`,
		"fallback": "nrk:go-backward-30-expressive",
	});
}

export default Component;
