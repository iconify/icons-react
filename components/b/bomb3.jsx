import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm1b0-4mg.css';
import '../../css/z/zfpx72qbe.css';
import '../../css/l/l1b52uzek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hm1b0-4mg"/><path clip-rule="evenodd" class="zfpx72qbe"/><path class="l1b52uzek"/></g>`,
		"fallback": "reicon:bomb3",
	});
}

export default Component;
