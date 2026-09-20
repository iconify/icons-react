import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct4q6eb6d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct4q6eb6d"/>`,
		"fallback": "teenyicons:direction-outline",
	});
}

export default Component;
