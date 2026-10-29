import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s45x-eokh.css';
import '../../css/t/t218te2ox.css';
import '../../css/l/lrg-fdc4r.css';
import '../../css/r/rk4es2bhg.css';
import '../../css/w/wc6bsjbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s45x-eokh wm-deco"/><path class="t218te2ox wm-deco"/><path class="lrg-fdc4r wm-a"/><path class="rk4es2bhg wm-k"/><path class="wc6bsjbsj wm-a"/></g>`,
		"fallback": "withicons:chart-scatter-blueprint",
	});
}

export default Component;
