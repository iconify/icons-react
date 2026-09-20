import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0be3bgwo.css';
import '../../css/p/p9tesnssu.css';
import '../../css/e/ep8ejkici.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0be3bgwo"/><path class="p9tesnssu"/><path class="ep8ejkici"/></g>`,
		"fallback": "tdesign:cooperate",
	});
}

export default Component;
