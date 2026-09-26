import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cmta0755d.css';
import '../../css/b/b1hqolb1t.css';
import '../../css/k/klu756_3c.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cmta0755d"/><path class="b1hqolb1t"/><path clip-rule="evenodd" class="klu756_3c"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-lock-bold",
	});
}

export default Component;
