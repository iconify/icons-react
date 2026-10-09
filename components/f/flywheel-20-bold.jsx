import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_1rdccum.css';
import '../../css/m/mptrtbrij.css';
import '../../css/q/qi6_u5bwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_1rdccum"/><path class="mptrtbrij"/><path class="qi6_u5bwz"/>`,
		"fallback": "energy-icons:flywheel-20-bold",
	});
}

export default Component;
