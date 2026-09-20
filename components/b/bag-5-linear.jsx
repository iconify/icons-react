import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nnbq32cap.css';
import '../../css/s/sr5bgubyr.css';
import '../../css/b/bv16y576p.css';
import '../../css/t/t8k39sbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nnbq32cap"/><path class="sr5bgubyr"/><path class="bv16y576p"/><path class="t8k39sbmk"/></g>`,
		"fallback": "solar:bag-5-linear",
	});
}

export default Component;
