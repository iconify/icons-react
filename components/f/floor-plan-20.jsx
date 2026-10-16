import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep1rdvbyo.css';
import '../../css/n/n6y0u1blv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep1rdvbyo"/><path class="n6y0u1blv"/>`,
		"fallback": "energy-icons:floor-plan-20",
	});
}

export default Component;
