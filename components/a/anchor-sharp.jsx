import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_qf8bbiq.css';
import '../../css/w/woyg9ybfc.css';
import '../../css/z/ztu1ebhyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_qf8bbiq"/><path class="woyg9ybfc"/><path class="ztu1ebhyy"/></g>`,
		"fallback": "pixelarticons:anchor-sharp",
	});
}

export default Component;
