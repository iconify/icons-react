import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nygqmabbq.css';
import '../../css/i/iwdb11t7s.css';
import '../../css/l/l7sdbnbma.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nygqmabbq"/><path class="iwdb11t7s"/><path class="l7sdbnbma"/>`,
		"fallback": "energy-icons:helideck-20",
	});
}

export default Component;
