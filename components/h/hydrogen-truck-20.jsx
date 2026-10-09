import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0dtlbqb.css';
import '../../css/h/hipucnysa.css';
import '../../css/g/gujp9-bxu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0dtlbqb"/><path class="hipucnysa"/><path class="gujp9-bxu"/>`,
		"fallback": "energy-icons:hydrogen-truck-20",
	});
}

export default Component;
