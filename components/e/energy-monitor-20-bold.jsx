import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-glm68dp.css';
import '../../css/o/odoplnlhz.css';
import '../../css/y/y_vihbj5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-glm68dp"/><path class="odoplnlhz"/><path class="y_vihbj5b"/>`,
		"fallback": "energy-icons:energy-monitor-20-bold",
	});
}

export default Component;
