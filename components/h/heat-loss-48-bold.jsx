import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv6cn3b_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv6cn3b_c"/>`,
		"fallback": "energy-icons:heat-loss-48-bold",
	});
}

export default Component;
