import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi5qd16vh.css';
import '../../css/v/v7zpq2cvm.css';
import '../../css/o/o76juu94h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi5qd16vh"/><path class="v7zpq2cvm"/><path class="o76juu94h"/>`,
		"fallback": "energy-icons:hybrid-inverter-20",
	});
}

export default Component;
