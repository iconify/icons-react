import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6or-r9if.css';
import '../../css/g/ggfao8bos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6or-r9if"/><path class="ggfao8bos"/>`,
		"fallback": "energy-icons:dew-20-bold",
	});
}

export default Component;
