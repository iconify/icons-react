import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b19q2ulep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b19q2ulep"/>`,
		"fallback": "energy-icons:arrow-big-down-20",
	});
}

export default Component;
