import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igszs0yyx.css';
import '../../css/r/r_cx60bme.css';
import '../../css/d/dvybr6c4h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igszs0yyx"/><path class="r_cx60bme"/><path class="dvybr6c4h"/>`,
		"fallback": "energy-icons:green-hydrogen-20",
	});
}

export default Component;
