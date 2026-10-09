import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xro2jqn5o.css';
import '../../css/q/qe8sicbkp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xro2jqn5o"/><path class="qe8sicbkp"/>`,
		"fallback": "energy-icons:cloud-sun-20-bold",
	});
}

export default Component;
