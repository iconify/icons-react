import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrvslrbcn.css';
import '../../css/t/t1ta_fbcc.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrvslrbcn"/><path class="t1ta_fbcc"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:chemical-plant-48",
	});
}

export default Component;
