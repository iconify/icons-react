import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4r8uwsgq.css';
import '../../css/p/pkogjrb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s4r8uwsgq"/><path class="pkogjrb8f"/></g>`,
		"fallback": "reicon:image-sparkle-filled",
	});
}

export default Component;
