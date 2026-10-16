import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etqrn7b3n.css';
import '../../css/y/yq_d2zbwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etqrn7b3n"/><path class="yq_d2zbwf"/>`,
		"fallback": "energy-icons:floor-plan-20-bold",
	});
}

export default Component;
