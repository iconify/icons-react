import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa6-c2yag.css';
import '../../css/i/ihj-8acvw.css';
import '../../css/b/bdln6g71h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa6-c2yag"/><path class="ihj-8acvw"/><path class="bdln6g71h"/>`,
		"fallback": "energy-icons:chart-donut-20-bold",
	});
}

export default Component;
