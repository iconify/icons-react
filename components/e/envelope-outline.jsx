import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_g6s6b9f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_g6s6b9f"/>`,
		"fallback": "teenyicons:envelope-outline",
	});
}

export default Component;
