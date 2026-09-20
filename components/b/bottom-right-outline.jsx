import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct8j_ekhr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct8j_ekhr"/>`,
		"fallback": "teenyicons:bottom-right-outline",
	});
}

export default Component;
