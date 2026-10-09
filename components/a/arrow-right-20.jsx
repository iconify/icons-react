import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oawkc0bme.css';
import '../../css/e/esmev4g_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oawkc0bme"/><path class="esmev4g_x"/>`,
		"fallback": "energy-icons:arrow-right-20",
	});
}

export default Component;
