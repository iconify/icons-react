import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrw04_m5h.css';
import '../../css/p/phwbj0btc.css';
import '../../css/c/cut7hp9fp.css';
import '../../css/v/vj2ahb9ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lrw04_m5h"/><path class="phwbj0btc"/><path class="cut7hp9fp"/><path class="vj2ahb9ml"/></g>`,
		"fallback": "tdesign:home",
	});
}

export default Component;
