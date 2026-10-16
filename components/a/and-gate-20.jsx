import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih1_q1b8g.css';
import '../../css/m/mllvz95kl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih1_q1b8g"/><path class="mllvz95kl"/>`,
		"fallback": "energy-icons:and-gate-20",
	});
}

export default Component;
