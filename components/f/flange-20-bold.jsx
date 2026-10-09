import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxllr2mpy.css';
import '../../css/q/q3acjfbyd.css';
import '../../css/k/kzer2rmvy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxllr2mpy"/><path class="q3acjfbyd"/><path class="kzer2rmvy"/>`,
		"fallback": "energy-icons:flange-20-bold",
	});
}

export default Component;
