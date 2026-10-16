import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj7euhm1y.css';
import '../../css/h/h17jzb6dy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj7euhm1y"/><path class="h17jzb6dy"/>`,
		"fallback": "energy-icons:data-pipeline-20-bold",
	});
}

export default Component;
