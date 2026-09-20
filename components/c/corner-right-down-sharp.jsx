import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k9n5e0gal.css';
import '../../css/h/huzwlhkfc.css';
import '../../css/q/ql538pbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k9n5e0gal"/><path class="huzwlhkfc"/><path class="ql538pbyt"/></g>`,
		"fallback": "pixelarticons:corner-right-down-sharp",
	});
}

export default Component;
