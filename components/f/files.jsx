import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxiansc7i.css';
import '../../css/g/gv-xmwbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jxiansc7i"/><path class="gv-xmwbnv"/></g>`,
		"fallback": "pixelarticons:files",
	});
}

export default Component;
