import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0np8zw3o.css';
import '../../css/f/f7tmn3bfb.css';
import '../../css/q/qohosibzi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0np8zw3o"/><path class="f7tmn3bfb"/><path class="qohosibzi"/>`,
		"fallback": "energy-icons:expand-20",
	});
}

export default Component;
