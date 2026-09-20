import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vswfw9aqb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vswfw9aqb"/>`,
		"fallback": "teenyicons:briefcase-outline",
	});
}

export default Component;
