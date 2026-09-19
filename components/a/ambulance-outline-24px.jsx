import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaxlnzbpc.css';
import '../../css/s/sjprw7bfy.css';
import '../../css/n/ngc_fgbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kaxlnzbpc"/><path clip-rule="evenodd" class="sjprw7bfy"/><path class="ngc_fgbhq"/></g>`,
		"fallback": "healthicons:ambulance-outline-24px",
	});
}

export default Component;
