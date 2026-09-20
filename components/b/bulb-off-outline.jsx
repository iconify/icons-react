import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noi8_7lma.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noi8_7lma"/>`,
		"fallback": "teenyicons:bulb-off-outline",
	});
}

export default Component;
