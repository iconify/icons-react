import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjazr7byc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjazr7byc"/>`,
		"fallback": "energy-icons:cloud-drizzle-20-bold",
	});
}

export default Component;
