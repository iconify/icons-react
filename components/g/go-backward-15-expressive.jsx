import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gox2nnbuj.css';
import '../../css/i/im_tqjpdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gox2nnbuj"/><path class="im_tqjpdw"/></g>`,
		"fallback": "nrk:go-backward-15-expressive",
	});
}

export default Component;
