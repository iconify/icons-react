import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xv6dojbxw.css';
import '../../css/p/pchy-4bkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xv6dojbxw"/><path class="pchy-4bkg"/></g>`,
		"fallback": "bi:exposure",
	});
}

export default Component;
