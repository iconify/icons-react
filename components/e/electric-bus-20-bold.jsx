import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwoyjqbns.css';
import '../../css/h/h0i-lgbdj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwoyjqbns"/><path class="h0i-lgbdj"/>`,
		"fallback": "energy-icons:electric-bus-20-bold",
	});
}

export default Component;
