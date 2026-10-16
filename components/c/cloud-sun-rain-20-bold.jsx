import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ly-n7ye.css';
import '../../css/d/dzz1crbpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ly-n7ye"/><path class="dzz1crbpy"/>`,
		"fallback": "energy-icons:cloud-sun-rain-20-bold",
	});
}

export default Component;
