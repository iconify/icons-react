import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrg2y8b_v.css';
import '../../css/e/e0a-jqb-n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrg2y8b_v"/><path class="e0a-jqb-n"/>`,
		"fallback": "energy-icons:city-skyline-20-bold",
	});
}

export default Component;
