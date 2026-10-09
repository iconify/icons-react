import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tydcr7btg.css';
import '../../css/k/krbzztkfk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tydcr7btg"/><path class="krbzztkfk"/>`,
		"fallback": "energy-icons:award-20-bold",
	});
}

export default Component;
