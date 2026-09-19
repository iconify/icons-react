import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whirn3xfi.css';
import '../../css/w/wt66k5bgh.css';
import '../../css/x/x884hoqjw.css';
import '../../css/u/uus91tb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whirn3xfi"/><path clip-rule="evenodd" class="wt66k5bgh"/><path class="x884hoqjw"/><path clip-rule="evenodd" class="uus91tb3z"/></g>`,
		"fallback": "healthicons:biomarker-outline-24px",
	});
}

export default Component;
