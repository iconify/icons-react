import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7juawdew.css';
import '../../css/x/x_jd0jbbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7juawdew"/><path class="x_jd0jbbm"/>`,
		"fallback": "energy-icons:house-chart-20",
	});
}

export default Component;
