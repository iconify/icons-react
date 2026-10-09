import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml5wo9g1f.css';
import '../../css/h/h3y6nxd1e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml5wo9g1f"/><path class="h3y6nxd1e"/>`,
		"fallback": "energy-icons:battery-fire-20-bold",
	});
}

export default Component;
