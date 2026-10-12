import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx4xreset.css';
import '../../css/h/hyx6j7bve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx4xreset"/><path class="hyx6j7bve"/>`,
		"fallback": "energy-icons:function-20-bold",
	});
}

export default Component;
