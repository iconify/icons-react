import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k98tn-izd.css';
import '../../css/m/mjb6-8gcf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k98tn-izd"/><path class="mjb6-8gcf"/>`,
		"fallback": "energy-icons:generator-20-bold",
	});
}

export default Component;
