import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mocog6boj.css';
import '../../css/h/ho9y8vbhq.css';
import '../../css/v/vi_8ex1lt.css';
import '../../css/a/alhk8c02y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mocog6boj"/><path class="ho9y8vbhq"/><path class="vi_8ex1lt"/><path class="alhk8c02y"/>`,
		"fallback": "energy-icons:battery-rack-20",
	});
}

export default Component;
