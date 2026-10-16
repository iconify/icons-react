import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5tyujbpm.css';
import '../../css/l/l3tq00bvz.css';
import '../../css/d/dce81qbwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5tyujbpm"/><path class="l3tq00bvz"/><path class="dce81qbwz"/>`,
		"fallback": "energy-icons:emergency-exit-20-bold",
	});
}

export default Component;
