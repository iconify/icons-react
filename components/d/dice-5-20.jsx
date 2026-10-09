import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp0_ibgn.css';
import '../../css/x/x1u33tbzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp0_ibgn"/><path class="x1u33tbzc"/>`,
		"fallback": "energy-icons:dice-5-20",
	});
}

export default Component;
