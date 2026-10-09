import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8ue7ubrb.css';
import '../../css/o/o_kxisbow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8ue7ubrb"/><path class="o_kxisbow"/>`,
		"fallback": "energy-icons:forecast-48-bold",
	});
}

export default Component;
