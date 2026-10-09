import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du-l4391e.css';
import '../../css/q/qsxkqnwbg.css';
import '../../css/x/xoc82-0le.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du-l4391e"/><path class="qsxkqnwbg"/><path class="xoc82-0le"/>`,
		"fallback": "energy-icons:engineer-20",
	});
}

export default Component;
