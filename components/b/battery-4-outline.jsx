import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9pgtwrlu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9pgtwrlu"/>`,
		"fallback": "teenyicons:battery-4-outline",
	});
}

export default Component;
