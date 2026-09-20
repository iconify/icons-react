import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7646jdal.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7646jdal"/>`,
		"fallback": "teenyicons:battery-5-outline",
	});
}

export default Component;
