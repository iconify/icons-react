import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mcems0k.css';
import '../../css/d/ddxx92y4s.css';
import '../../css/a/ampqdu6-c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mcems0k"/><path class="ddxx92y4s"/><path class="ampqdu6-c"/>`,
		"fallback": "energy-icons:house-battery-20-bold",
	});
}

export default Component;
