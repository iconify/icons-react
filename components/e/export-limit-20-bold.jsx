import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljun7bd8t.css';
import '../../css/y/yk5jtlbyy.css';
import '../../css/w/wj33zbcyf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljun7bd8t"/><path class="yk5jtlbyy"/><path class="wj33zbcyf"/>`,
		"fallback": "energy-icons:export-limit-20-bold",
	});
}

export default Component;
