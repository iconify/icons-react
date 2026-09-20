import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdrxi_5qi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdrxi_5qi"/>`,
		"fallback": "teenyicons:caret-vertical-circle-outline",
	});
}

export default Component;
