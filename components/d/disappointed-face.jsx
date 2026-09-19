import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/p/p9wbff3gl.css';
import '../../css/j/je33esp2z.css';
import '../../css/r/rv6d_n19x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="p9wbff3gl"/><path class="je33esp2z"/><path class="rv6d_n19x"/></g>`,
		"fallback": "icon-park:disappointed-face",
	});
}

export default Component;
