import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2l8ftbhe.css';
import '../../css/p/pjj956y7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2l8ftbhe"/><path class="pjj956y7i"/>`,
		"fallback": "energy-icons:arrow-up-48-bold",
	});
}

export default Component;
