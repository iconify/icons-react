import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e44d_bbpo.css';
import '../../css/n/n4r5wlwiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e44d_bbpo"/><path class="n4r5wlwiq"/>`,
		"fallback": "energy-icons:chef-hat-20-bold",
	});
}

export default Component;
